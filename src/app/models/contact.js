import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "Name",
    phone: "324234",
    email: "Email"
  },
  initialize: function(options){
    console.log("contact made");
  }
});

export default Contact;
