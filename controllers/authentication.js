const bcryptjs = require('bcryptjs');

const Usuario = require('../models/Usuario');

const { getJWT } = require('../tokens/get-jwt');

const authentication = async(req, res) => {
    const {email, password} = req.body;
    try {
        const usuario = await Usuario.findOne({ email });
        if (!usuario) {
            const newUser = new Usuario({ email, password });

            const salt = bcryptjs.genSaltSync();
            newUser.password = bcryptjs.hashSync(password, salt);
            //console.log("password - " + password);
            await newUser.save();
            return res.status(200).json({
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
        //console.log("secret key " + process.env.SECRET_KEY);
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