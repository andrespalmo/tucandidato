
/*
 * GET users listing.
 */

var UserSchema = require('../schemas/user');

module.exports = {
  index: function(req, res) {
    UserSchema.find({}, function(err, data){
      console.log(req);
      res.json(data);
    });
  },

  create: function(req, res) {
    var newUser = new UserSchema(req.body);
    newUser.save(function(err, user) {
      if (err) res.json({});
      console.log(user);
      res.json(user);
    });
  } 
};