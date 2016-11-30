import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "cat",
    phoneNumber: 2063456789,
    email: "meow@purr.com"
  },
  initialize.function() {
    console.log("Creating a new contact with name " + this.name);
  }
});

export default Contact;
