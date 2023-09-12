const express = require('express');
const path = require('path');
const apiCall = require('./getRecipes.js')
require('dotenv');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('/results', (req, res) => {
  apiCall.getRecipes((req.query), (err, data) => {
    if (err) {
      console.log('Error finding definition', err);
      return res.sendStatus(404)
    }
    console.log(data)
    res.json(data);
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`Listening at http://localhost:${PORT}`)