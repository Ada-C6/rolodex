import Backbone from 'backbone';
//
// // const Contact = Backbone.Model.extend({
// //   // This model should have the attributes for
// //   // a single contact: name, phone number, and email.
// // });

var Contact = Backbone.Model.extend({
  defaults: { // backbone keyword, similar to schema in rails
    name: "Contact Name",
    email: "some@email.here",
    phone: false
  },
  initialize: function() { // it can do more complex things we wont see today/this week
    console.log("Created new contact with name " + this.get('name'));
  }
//
});
//
export default Contact;
