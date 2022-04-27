const List = require("../models/List");

const createList = async(req, res) => {
    const { title, description, link } = req.body;
    const listDB = await List.findOne({title: title});
    if(listDB){
      return res.status(400).json({
        message: `title ${listDB.title} exists`
      })
    }
    const data = {
      title,
      description,
      link,
      state: true,
      usuario: req.user._id
    }
    const list = new List(data);
    await list.save();
    res.status(200).json(list);
}

const getAllList = async (req, res) => {
  const allList = await List.find({state: true}).populate('usuario', 'email');
  const total = await List.countDocuments({state: true});
  res.json({
    message: 'All lists',
    total,
    allList
  });
}

module.exports = {
  createList,
  getAllList
}
  