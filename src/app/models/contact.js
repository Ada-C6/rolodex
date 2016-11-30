const Contact = Backbone.Model.extend({
  defaults: {
    name: "Random Person",
    email: "name@example.com",
    phone: "888-802-3434"
  },
  initialize: function() {
    console.log("Added a contact card for" + this.name);
  }
});

export default Contact;
