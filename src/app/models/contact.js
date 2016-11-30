import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Unknown Name",
    email: "Unknown Email",
    phone: "Unknown Phone"
  },

  initialize: function() {
    console.log("Created new contact with name " + this.name);
  }
});

export default Contact;
