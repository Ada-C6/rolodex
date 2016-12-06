import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "New Contact",
    email: 'contact@me.com',
    phone: '(000) 000-0000'
  },

  initialize: function(options) {
    console.log(">>>> Contact Created: " + this.get("name")); 
  }

});

export default Contact;
