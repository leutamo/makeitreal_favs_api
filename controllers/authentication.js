const bcryptjs = require('bcryptjs');

const Usuario = require('../models/Usuario');

const authentication = async(req, res) => {
    const {email, password} = req.body;
    try {
        const usuario = await Usuario.findOne({email});
        if (!usuario) {
            return res.status(400).json({
                message: "Email or Password Incorrect!"
            })
        }

        const validatePassword = bcryptjs.compareSync(password, usuario.password);
        if (!validatePassword) {
            return res.status(400).json({
                message: "Email or Password Incorrect!"
            });
        }

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Server Error"
        });
    }
}


module.exports = { authentication }