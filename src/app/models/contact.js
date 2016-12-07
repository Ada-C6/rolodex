import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "Jane Doe",
    phone: "(555)555-5555",
    email: "jane_doe@gmail.com"
  },

  initialize: function() {
    console.log("created a new contact for " + this.name);
  }

});

export default Contact;
