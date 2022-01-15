const mysql = require("mysql2");

const openConnection = () => {
  const connection = mysql.createConnection({
    uri: "mysql://db:3306",
    database: "mydb",
    // port:3306,
    password: "password",
    user: "root",
  });
  connection.connect();
  return connection;
};
module.exports = {
  openConnection,
};
