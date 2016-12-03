import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  initialize: function(options) {
    this.name = options.name;
    this.phone = options.phone;
    this.email = options.email;
  }
});

export default Contact;
