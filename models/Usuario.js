const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
  email: {
    type: String,
    require: [true, 'email is mandatory']
  },
  password: {
    type: String,
    require: [true, 'password is mandatory']
  },
  state: {
    type: Boolean,
    default: true
  },
});

UsuarioSchema.methods.toJSON = function() {
  const { __v, password, ...usuario } = this.toObject();
  return usuario;
}

module.exports = model('Usuario', UsuarioSchema);