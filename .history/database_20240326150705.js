const { Pool } = require('pg')
require('dotenv').config();

const db = new Pool({
  user: 'asset_v84x_user',
  host: 'dpg-co19cuacn0vc73ee4650-a.oregon-postgres.render.com',
  database: 'asset_v84x',
  password: 'qLHuQV448bC3qbQFh0d5Y7XM0merQZTX',
  port: 5432,
  ssl:true
})
db.connect(function (err) {
  if (err) console.log(err);
  console.log("Connected!");
});

module.exports = {
  db
}