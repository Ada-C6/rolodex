import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "Lady Shari",
    email: "kesha@aol.com",
    phone: 7082873399
  },
  initialize: function (){
    console.log("You created a card for" + this.name);
  },
});

export default Contact;
