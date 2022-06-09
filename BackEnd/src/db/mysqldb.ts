
let mysql = require('mysql');

export let pool  = mysql.createPool({
  connectionLimit : 100,
  host            : 'localhost',
  user            : 'root',
  password        : '12345',
  database        : 'instrumentos'
});