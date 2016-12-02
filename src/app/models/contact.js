import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  // idAttribute:"_id",
  defaults: {
    name: "",
    email: "",
    phoneNumber: ""
  }
});

export default Contact;
