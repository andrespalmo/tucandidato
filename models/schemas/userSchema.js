var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  email: String,
  user_id: String,
  name: String,
  status: String,
  third_party_id: String
});
