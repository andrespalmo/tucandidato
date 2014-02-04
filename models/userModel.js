var UserSchema = require('./schemas/userSchema.js');

module.exports = {


	/**
	 * Finds all users
	 * @param {Request} req
	 * @returns {Object} user
	 */
	getAllUsers: function(req, callback) {
		UserSchema.find({}, function(err, user){
			callback(user);
		});
	},


	/**
	 * Creates an user
	 * @param {Request} req
	 * @returns {Object} user
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
	 * @returns {Object} user
	 */
	getUserById: function(userId,callback){
		
		UserSchema.findOne({ user_id:userId }, function(err,user){
			callback(user);
		});
	}

};