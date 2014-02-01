module.exports = {


	/**
	* Determines if an object is empty
	* @param {Object} obj
	* @returns {Boolean}
	*/
	isEmpty: function(obj) {
		return Boolean(obj && typeof obj == 'object') && !Object.keys(obj).length;
	}

};