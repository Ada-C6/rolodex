// contact.js
// equivlant task.js
import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "Person",
    phone: "6029970009",
    email: "yolo@aol.com"
  },
  initialize: function() {
    console.log("Created a new contact: " + this.name);
  }

});

export default Contact;
