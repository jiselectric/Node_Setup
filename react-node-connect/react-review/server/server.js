const express = require('express');
const app = express();
const api = require('./routes/index');
const cors = require('cors');

const port = 3001;

app.use(cors());
app.use('/api', api);

/* 
app.post('/api', (req, res) => {
  const text = req.body.name;
  console.log(text);
});
**/ 
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


