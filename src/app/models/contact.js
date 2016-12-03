import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "My contact",
    phone: "XXX XXX XXXX",
    email: "contact@mail.com"
  },
  initialize: function(options){
    console.log("New contact created: " + this.get("name") + ", " + this.get("phone") + ", " + this.get("email"));
  }
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});

export default Contact;
