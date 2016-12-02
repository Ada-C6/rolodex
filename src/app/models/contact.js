import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: "Jane Doe",
    email: "doe@noemail",
    phone: 0
  },
  initialize: function() {
    console.log("Made a new contact with name " + this.name);
  }

});

export default Contact;
