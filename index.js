const express = require('express');
const dotenv = require('dotenv');
const users = require('./routes/users')
const images = require('./routes/image')
const app = express();
dotenv.config();

app.use(express.json({ extended: false }));
require("./config/database").connect();

const PORT = process.env.PORT || 5000; 
app.use('/api/', users);
app.use('/api/image', images);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}
);





