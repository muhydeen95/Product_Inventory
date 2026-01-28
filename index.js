require('dotenv').config();

const express = require('express');
const router = require('./routes/router');

const app = express(express.json());


app.get('/', (req, res) => {

});

app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});