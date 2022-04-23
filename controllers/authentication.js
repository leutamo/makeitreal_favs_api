const bcryptjs = require('bcryptjs');

const Usuario = require('../models/Usuario');

const authentication = async(req, res) => {
    const {email, password} = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            const newUser = new Usuario({ email, password });

            const salt = bcryptjs.genSaltSync();
            newUser.password = bcryptjs.hashSync(password, salt);

            await newUser.save();
            res.status(200).json({
                message: "User Created",
                newUser
            })
        }

        const validatePassword = bcryptjs.compareSync(password, usuario.password);
        if (!validatePassword) {
            return res.status(400).json({
                message: "Email or Password Incorrect!"
            });
        }

        const token = await getJWT(usuario.id);
        res.json({        
          token
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
}


module.exports = { authentication }