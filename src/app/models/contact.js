import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
  defaults: {
    name: "Jane",
    phone: "123-4567",
    email: "Janedoe@gmail.com"
  },

  initialize: function(){
    console.log("Contact Created for" + this.get("name"));
  }
});

export default Contact;
