import Backbone from 'backbone';

var Contact = Backbone.Model.extend({
  defaults: {
    name: 'Unknown Name',
    email: 'Unknown Email',
    phone: 'Unknown phone number'
  },

  initialize: function() {
    console.log("created new contact with name" + this.attributes.name);
  }
});

export default Contact;
