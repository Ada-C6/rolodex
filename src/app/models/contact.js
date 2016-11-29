import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Placeholder Name",
    phoneNumber: "2061110000",
    email: "Placeholder Email", // This is unnecessary since undefined is falsey.
  },

  initialize: function (options) {
    console.log("Task Contact for: " +
    this.get("name"));
    // this.set("description", "JavaScript is frustrating!")
  },

  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});

export default Contact;
