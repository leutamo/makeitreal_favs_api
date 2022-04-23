const createList = async(req, res) => {
    const { estado, usuario } = req.body;
    const listDB = await List.findOne({title: resto.title});
    if(listDB){
      return res.status(400).json({
        message: `title ${listDB.title} exists`
      })
    }
    const data = {
      ...resto,
      usuario: req.usuario._id
    }
    const list = new List(data);
    await list.save();
    res.status(200).json(list);
  }
  