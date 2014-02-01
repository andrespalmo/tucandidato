var userModel = require("../models/userModel.js");

  module.exports = {
    find: function(req, res) {
      var data = user.findUser(req);
      res.json(data);
    },

    create: function(req, res) {
      var data = user.createUser(req);
      res.json(data);
    }
  };
