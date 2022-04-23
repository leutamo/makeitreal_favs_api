const { Schema, model } = require('mongoose');

const ListSchema = Schema({
  title: {
    type: String,
    require: [true, 'title is mandatory']
  },
  description: {
    type: String,
    require: [true, 'description is mandatory']
  },
  link: {
    type: String,
    require: [true, 'link is mandatory']
  },
  state: {
    type: Boolean,
    default: true
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    require: true
  }
});

ListSchema.methods.toJSON = function() {
  const { __v, ...list } = this.toObject();
  return list;
}

module.exports = model('List', ListSchema);