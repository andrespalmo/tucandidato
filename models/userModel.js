require('../schemas/userSchema.js');

var UserModel = function(){


	/**
	 * Finds all users
	 * @param {Request} req
	 * @returns {User} user
	 */
	findUser = function(req){
		userSchema = new UserSchema();
		userSchema.find({}, function(err, user){
			console.log(req);
			return user;
		});
	};


	/**
	 * Creates an user
	 * @param {Request} req
	 * @returns {User} user
	 */
	createUser = function(req){
		userSchema = new UserSchema(req.body);
		userSchema.save(function(err, user){
			if(err){
				user = {};
				return user;
			}else{
				console.log(user);
				return user;
			}
		});
	};

};