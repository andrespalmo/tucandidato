var userModel = require("../models/userModel");
var utilities = require("../utilities/utilities");

module.exports = {


  /**
   * Calls userController to find all users.
   * @param {Request} req
   * @returns {Object} user
   */
  getAllUsers: function(req, res) {
      userModel.getAllUsers(req, function(data){
      res.json(data);
    });
    
  },


  /**
   * Calls userController to create an user.
   * @param {Request} req
   * @returns {Object} user
   */
  createUser: function(req, res) {
      userModel.createUser(req, function(data){
      res.json(data);
    });
  },


  /**
   * Calls the userController to find an user by
   * facebook id.
   * @param {Request} req
   * @returns {Object} user
   */
  getUserById: function(req, res){
    var userId = req.session.userId;
    userModel.getUserById(userId, function(data){
      res.json(data);
    });
  },


  /**
   * Calls the userControler to find the user
   * if the user exists it saves the userId on a session variable
   * otherwise it creates the user.
   * @param {Request} req
   * @returns {Object} user
   */
  logIn: function(req, res){
    var userInfo = req.body;
    var userId = userInfo.user_id;
    userModel.getUserById(userId, function(data){
      if(data === null){
        userModel.createUser(req, function(data){
          req.session.userId = data.user_id;
          res.json(data);
        });
      }else{
        req.session.userId = data.user_id;
        res.json(data);
      }
    });
  },


  /**
   * Sees if the user is logged in, validating
   * the session variable 'userId'.
   * @param {Request} req
   * @param {Response} res
   * @param {Object} next
   */
  validateSession: function(req, res, next){
    var userId = req.session.userId;
    if(typeof userId !== 'undefined'){
      next();
    }else{
      res.redirect("/");
    }
  }

};
