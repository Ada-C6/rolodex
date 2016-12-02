import Backbone from 'backbone';

const Contact = Backbone.Model.extend({

  defaults: {
    name: "Placeholder name",
    phone: "Placeholder phone",
    email: "Placeholder email"
  },

  initialize: function() {
    // console.log("Created new contact with name " + this.get('name'));
  }

});

export default Contact;
