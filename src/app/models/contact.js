// contact.js

import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

  defaults: {
    name: "Person",
    phone: "1234567890",
    email: "email@email.com"
  },

  initialize: function() {
    // console.log("contact created: " + this.name);
  }
});

export default Contact;
