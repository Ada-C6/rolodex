import Backbone from 'backbone';

const Contact = Backbone.Model.extend({

  defaults: {
    name: "Placeholder name",
    phoneNumber: "Placeholder phoneNumber",
    email: "Placeholder email"
  },

  initialize: function() {
    console.log("Created new contact with name " + this.get('name'));
  }

});

export default Contact;
