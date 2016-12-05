// contact.js
// equivlant task.js
import Backbone from 'backbone';
// Troubleshooting, will I need to other imports here?


const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "Person",
    phone: "6029970009",
    email: "yolo@aol.com"
  },
  
  initialize: function() {
    // this works now! its displaying and grabbing name properly. Needed:  this.get("name")
    console.log("Created a new contact: " + this.get("name")); // remaining undefined.
  }

});

export default Contact;
