require('dotenv').config();

const express = require('express');
const router = require('./routes/product.route.js');

const app = express();
app.use(express.json())

app.get('/', (req, res) => {
  res.send("hello");
});

app.use('/api', router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});