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
