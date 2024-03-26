const { Pool } = require('pg')
require('dotenv').config();

const db = new Pool({
  user: 'food_delivery_evyb_user',
  host: 'qLHuQV448bC3qbQFh0d5Y7XM0merQZTX@dpg-co19cuacn0vc73ee4650-a.oregon-postgres.render.com',
  database: 'food_delivery_evyb',
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