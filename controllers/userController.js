var userModel = require("../models/userModel");

  module.exports = {
    getUser: function(req, res) {
      var data = userModel.getUser(req, function(data){
        console.log(data);
        res.json(data);
      });
      
    },

    createUser: function(req, res) {
      var data = userModel.createUser(req, function(data){
        res.json(data);
        console.log(data);
      });
    }
  };