import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Anonymous",
    phone: "000-000-0000",
    email: "oops@mistake.com"
  },

  initialize: function() {
    console.log("Created a new contact with name " + this.name);
  }
});

export default Contact;
