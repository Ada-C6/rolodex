import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

  defaults: {
  	name: "Sarsparilla Rootbier",
  	phone: "000-000-0000",
  	email: "srb@beveragecemetary.io"
  },

  initialize: function() {
  	console.log("created new contact card for" + this.name);
  }
});

export default Contact;
