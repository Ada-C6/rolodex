import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

  defaults: {
    name: "Placeholder Name",
    phone: "Placehold Phone",
    email: "Placeholder Email"
  },
  initialize: function(options) {
    console.log("06 - 09. You've created a new model with the name " + this.attributes.name);
  }

});

export default Contact;
