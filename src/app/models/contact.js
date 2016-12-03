import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

  defaults: {
    name: "Unknown Contact",
    email: "placeholder email",
    phone: "placeholder phone number"
    // complete: false
  },

  initialize: function(){
    console.log("created new contact: " + this.name); // this.attributes.name
  }

});

export default Contact;
