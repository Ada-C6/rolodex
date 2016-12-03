// This model represents a single contact
import Backbone from 'backbone';


const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "Foot Foot",
    phone: 999001192,
    email: "example@aol.com"
  },
  initialize: function() {
    console.log("Created new contact with title " + this.name);
  }
});

export default Contact;
