// When wave 1 is complete your application should:
//
// Have a Backbone Model subclass called Contact. This model should have these attributes:
// Name
// E-mail address
// Phone number
// Have a single instance of Contact created from static data.
// Have a Backbone View subclass called ContactView.
// Display a single contact card on the contact list. This contact card should:
// Be implemented by using Contact and ContactView together.
// Show the name only, no other contact details.

import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Bob",
    email: "bob@bob.com",
    phone: "555-555-555"
  }
});

export default Contact;
