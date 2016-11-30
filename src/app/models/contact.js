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


// When wave 1 is complete your application should:
//

// Have a single instance of Contact created from static data.
// Have a Backbone View subclass called ContactView.
// Display a single contact card on the contact list. This contact card should:
// Be implemented by using Contact and ContactView together.
// Show the name only, no other contact details.
