import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "contact name",
    email: null,
    phone: "(206) 321-4561"
  },

  initialize: function() {
    // not sure why but this seems to run twice when you create a new hard-coded contact. ¯\_(ツ)_/¯
    // or maybe two are actually created, but only one view.
    console.log("created contact", this.get('name'))
  }
});

export default Contact;
