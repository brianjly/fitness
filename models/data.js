var restful = require('node-restful');
var mongoose = restful.mongoose;

var dataSchema = new mongoose.Schema({
  name: String,
  message: String
});

module.exports = restful.model('Data', dataSchema);
