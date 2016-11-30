import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: 'Name Here',
    phone: '555-555-5555',
    email: 'name@email.com'
  },

  initialize: function() {
    console.log("Created new contact with name " + this.name);
  }
});

export default Contact;
