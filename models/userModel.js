var UserSchema = require('./schemas/userSchema.js');

module.exports = {

	/**
	 * Finds all users
	 * @param {Request} req
	 * @returns {User} user
	 */
	getAllUsers: function(req, callback) {
		UserSchema.find({}, function(err, user){
			callback(user);
		});
	},


	/**
	 * Creates an user
	 * @param {Request} req
	 * @returns {User} user
	 */
	createUser: function(req,callback) {
		var newUser = new UserSchema(req.body);
		newUser.save(function(err, user){
			if(err){
				var data = {};
				callback(data);
			}else{
				callback(user);
			}
		});
	},

	/**
	 * Finds an user by facebook id
	 * @param {Request} req
	 * @returns {User} user
	 */
	getUserById: function(req,callback){
		var userInfo = req.body;
		var userId = userInfo.user_id
		
		UserSchema.find({ user_id:userId }, function(err,user){
			callback(user);
		});
	}

};