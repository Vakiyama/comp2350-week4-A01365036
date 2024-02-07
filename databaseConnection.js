const mysql = require('mysql2/promise');

const is_qoddi = process.env.IS_QODDI || false;

const dbConfigQoddi = {
  host: 'sql.freedb.tech',
  user: 'freedb_main_2_2350',
  password: '*eP89ebRD5#$Kxa',
  database: 'freedb_comp2350-week2-A01365036',
  multipleStatements: false,
};

const dbConfigLocal = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'database1',
  multipleStatements: false,
};

if (is_qoddi) {
  var database = mysql.createPool(dbConfigQoddi);
} else {
  var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
