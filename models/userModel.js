var UserSchema = require('./schemas/userSchema.js');

module.exports = {

	/**
	 * Finds all users
	 * @param {Request} req
	 * @returns {User} user
	 */
	getUser: function(req, callback) {
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
	}

};