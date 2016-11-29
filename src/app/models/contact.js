import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

defaults: {
    name: 'Name Here',
    phone: 'Number Here',
    email: 'Email Here'
  },

  initialize: function(options) {
    console.log("new contact" + this.get("name"));
  },
  
});

export default Contact;
