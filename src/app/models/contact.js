import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

  defaults: {
    name: "An Invisible Human",
    phone: "000-000-0000",
    email: "space@nonexistent.com"
  },

  initialize: function() {
  },

});

export default Contact;
