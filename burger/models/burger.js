const orm = require("../config/orm.js");

const burger = {
  all: function(cb) {
    orm.all("burger", function(res) {
      cb(res);
    });
  }, 
  create: function(cb) {
    orm.create("burger", function(res) {
      cb(res);
    });
  },
  update: function(condition, cb) {
    orm.update("burger", condition, function(res) {
      cb(res);
    });
  }
};
module.exports = burger;
