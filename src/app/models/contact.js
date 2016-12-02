import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model has the attributes for
  // a single contact: name, phone number, and email.
  defaults:{
    name: "Placeholder name",
    phone: "Placeholder phone",
    email: "Placeholder email"
  },

  initialize: function(option){
    // default constructor is fine
  },
});

export default Contact;
