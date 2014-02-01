var userModel = require("../models/userModel");
var utilities = require("../utilities/utilities");

module.exports = {
  getAllUsers: function(req, res) {
      userModel.getAllUsers(req, function(data){
      res.json(data);
    });
    
  },

  createUser: function(req, res) {
      userModel.createUser(req, function(data){
      res.json(data);
    });
  },

  logIn: function(req, res){
    userModel.getUserById(req, function(data){
      if(utilities.isEmpty(data)){
        user = userModel.createUser(req, function(data){
          req.session.userId = data.user_id;
          res.json(data);
        });
      }else{
        req.session.userId = data.user_id;
        res.json(data);
      }
    });
  }
};
