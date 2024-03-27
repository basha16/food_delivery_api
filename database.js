const { Pool } = require('pg')
require('dotenv').config();

const db = new Pool({
  user: 'asset_v84x_user',
  host: 'dpg-cnkv5aud3nmc73bpndu0-a.oregon-postgres.render.com',
  database: 'asset_v84x',
  password: 'WqGnxNGLaRaQaF6uFd4PxL9eRV1vBfer',
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