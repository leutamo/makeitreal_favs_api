const mongoose = require('mongoose');

const MONGODB_URI = "mongodb://localhost/favs-app"

mongoose.connect(MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(bd => console.log("Database is onLine"))
.catch(err => console.log(err))
