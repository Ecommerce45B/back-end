require("dotenv").config();
const server = require('./src/server');
const { conn } = require("./src/config/bd");
const port  = process.env.PORT || 3001

conn
  .sync({ force: false })
  .then(() => {
    server.listen(port, () => {
      console.log(`listening on PORT ${port}`);
      ssl=true
    });
  })
  .catch((error) => console.error(error));