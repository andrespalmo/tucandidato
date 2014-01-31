require("../models/userModel.js");

var UserController = function(){

  var user = new UserModel();

  module.exports = {
    find: function(req, res) {
      data = user.findUser(req);
      res.json(data);
    },

    create: function(req, res) {
      data = user.createUser(req);
      res.json(data);
    }
  };

};