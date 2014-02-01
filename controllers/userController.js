var userModel = require("../models/userModel");

  module.exports = {
    find: function(req, res) {
      var data = userModel.findUser(req);
    },

    create: function(req, res) {
      var data = userModel.createUser(req.body);
    }
  };
