const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const conn = require('./src/database/conn');

const app = express()
const port = 3000
conn();

app.use(cors());
app.use(express.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})