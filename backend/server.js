const env = require('dotenv')
const app = require('./app')
const port = process.env.PORT || 3000

env.config({ path: './.env' })

app.listen(port, () => {
    console.log(`App running on port ${port}`);
   
  });

  