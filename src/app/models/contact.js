import Backbone from 'backbone';

var Contact = Backbone.Model.extend({
  defaults: {
    name: "Placeholder name",
    email: "Placeholder email",
    phoneNumber: "Placeholder phone number"
  },

  initialize: function() {
    console.log("Created new entry for contact: ",  this.attributes);
  }

});

export default Contact;
