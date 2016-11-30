import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "placeholder name",
    phoneNumber: 0,
    email: "placeholder email"
  },
  initialize: function() {
    console.log("Created a new contact with name " + this.name);
  }
});

export default Contact;
