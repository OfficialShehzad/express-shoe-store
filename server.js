require("dotenv").config();

const db = require("./config/db/db.js");
const app = require("./app.js");

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Ecommerce application listening on port ${PORT}`)
})