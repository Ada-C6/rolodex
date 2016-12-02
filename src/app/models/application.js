import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';


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
    this.contactList = new Rolodex(contactData);
  }

});

export default Application;
