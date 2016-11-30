import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

  defaults: {
    name: "Alyssa",
    phone: "952-270-6773",
    email: "akhursh@gmail.com"
  },
  initialize: function(options) {
    console.log("You've created a new model with the name " + this.attributes.name);
  }

});

export default Contact;
