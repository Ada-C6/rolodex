import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.

  defaults: {
    name: "Unknown Contact",
    email: "placeholder email",
    phone: "placeholder phone number",
    complete: false
  },

  initialize: function(){
    console.log("name is: " + this.attributes.name);
  },

  toggleComplete: function() {
    var newStatus = !(this.get('complete'));
    this.set('complete', newStatus);
  }

});

export default Contact;
