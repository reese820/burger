const orm = require("../config/connection.js");

orm.selectAll("burger_name", "devoured"){ 
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          return result;
        }
    }
orm.insertOne("burger_name", "devoured") {
        var queryString = "SELECT * FROM ?? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
          if (err) throw err;
          return result;
}
orm.updateOne("burger_name", "devoured") {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      return result;
    });

module.exports = orm;
