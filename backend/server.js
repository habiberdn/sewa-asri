const dotenv = require('dotenv');
const app = require('./app')
const port = process.env.PORT || 3000
const mongoose = require('mongoose');

dotenv.config({ path: './.env' });

const db = process.env.DATABASE;
console.log(process.env.NODE_ENV);

mongoose
.connect(db)
  .then(() => console.log('Connection succesfull'));
  
  app.listen(port, () => {
    console.log(`App running on port ${port}`);
   
  });