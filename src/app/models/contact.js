const Contact = Backbone.Model.extend({
  defaults: {
    name: "Random Person",
    email: "name@example.com",
    phone: "888-802-3434"
  },

  initialize: function() {
//    console.log("Added " + this.get('name'));
  }
});

export default Contact;
