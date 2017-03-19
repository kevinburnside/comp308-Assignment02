let mongoose = require('mongoose');

// create a model class
let contactsSchema = mongoose.Schema({
    Name: String,
    ContactNumber: String,
    EmailAddress: String
},
{
  collection: "contacts"
});

module.exports = mongoose.model('contacts', contactsSchema);
