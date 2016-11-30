import Backbone from 'backbone';

var Contact = Backbone.Model.extend({
  defaults: {
    name: "Lola",
    phone: 1143708,
    email: "lola@sassycat.com"
  },
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  initialize: function(){
    console.log("Created new contact for " + this.name);
  }
});

export default Contact;
