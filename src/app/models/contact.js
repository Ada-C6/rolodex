import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "default name",
    email: "default email",
    phone: "default phone"
  }, //close defaults

  initialize: function() {
    console.log("created a new contact with name: " + this.get("name"));
  } //close initialize
});

export default Contact;
