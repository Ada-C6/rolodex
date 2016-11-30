import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';


var contactData = [
{
  name: 'Sarah',
  phoneNumber: 1234567,
  email: 'me@email.com'
}, {
  name: 'Geffen',
  phoneNumber: 1234567,
  email: 'baby@email.com'
}, {
  name: 'Nemesh',
  phoneNumber: 1234567,
  email: 'dog@gmail.com'
}
];

const Application = Backbone.Model.extend({
  // This model represents the overall application.

  initialize: function() {
    console.log("Created new contactList");
    this.contactList = new Rolodex(contactData);
  }

});

export default Application;
