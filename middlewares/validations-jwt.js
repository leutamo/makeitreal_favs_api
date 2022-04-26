const jwt = require('jsonwebtoken');

const Usuario = require("../models/Usuario");

const isAuthenticated = async (req, res, next) => {
  //const token = req.header('Authorization');
  const token = req.headers.authorization.split(' ')[1];
  //console.log(token);
  if(!token){
    return res.status(401).json({
      msg:'No token in request'
    })
  }

  try {
    const { uid } = jwt.verify(token, process.env.SECRET_KEY);
    //console.log('uid', uid);
    const user = await Usuario.findById(uid);
    if(!user){
      return res.status(401).json({
        msg: 'User not exists'
      })
    }

    if(!user.state){
      return res.status(401).json({
        msg: 'User disabled'
      })
    }
    req.user = user;
    next();

  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: 'Token invalid'
    });
  }
}
module.exports = {
  isAuthenticated
}