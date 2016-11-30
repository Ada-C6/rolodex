import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  initialize: function(options) {
    this.name = options.name;
    this.phone = options.phone;
    this.email = options.email;
  }
});

export default Contact;
