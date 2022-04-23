const express = require('express')
const router = express.Router();
const cors = require('cors');

const app = express()
const port = 3000

const auth = require("./routes/auth");

// Middlewares
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("<h1>Node Api</h1>");
})

// Auth Api
app.use("/auth", auth);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})