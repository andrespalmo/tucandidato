var UserSchema = require('./schemas/userSchema.js');

module.exports = {
	/**
	 * Finds all users
	 * @param {Request} req
	 * @returns {User} user
	 */
	findUser: function(req, res) {
		var userSchema = new UserSchema();
		userSchema.find({}, function(err, user){
			console.log(req);
			return user;
		});
	},


	/**
	 * Creates an user
	 * @param {Request} req
	 * @returns {User} user
	 */
	createUser: function(req) {
		var userSchema = new UserSchema(req);
		userSchema.save(function(err, user){
			if(err){
				user = {};
				return user;
			}else{
				console.log(user);
				return user;
			}
		});
	}

};