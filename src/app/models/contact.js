import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Default",
    email: "default@default.com",
    phone: "4325556548"
  },

  initialize: function() {
    console.log("Created new contact");
  }
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});

export default Contact;
