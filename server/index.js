const express = require('express');
const path = require('path');
const apiCall = require('./getRecipes.js')
require('dotenv');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.get('/results', (req, res) => {
  apiCall.getRecipes((req.body.obj), (err, data) => {
    if (err) {
      console.log('Error finding definition', err);
      return res.sendStatus(404)
    }
    res.json(data)
  })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.log(`Listening at http://localhost:${PORT}`)