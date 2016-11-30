import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "a person",
    phone: "206-222-2222",
    email: "person@ada.edu"
  },
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  initialize: function() {
    console.log("Created a new contact with name: " + this.attributes.name);
  }
});

export default Contact;
