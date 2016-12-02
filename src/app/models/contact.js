import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Default",
    email: "default@default.com",
    phone: "4325556548"
  },

  initialize: function() {
    // console.log("Created new contact from hard-coded");
  }
});

export default Contact;
