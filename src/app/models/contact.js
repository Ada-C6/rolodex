// This model should have the attributes for
  // a single contact: name, phone number, and email.



import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
  name: "placeholder",
  phone: "placeholder",
  email: "placeholder"
},
initialize: function() {
  console.log("placeholder");
},

// add model methods 'save' and 'cancel'

});

export default Contact;
