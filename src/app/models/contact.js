import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
  name: "name",
  phone: "555-555-555",
  email: "name@gmail.com"
},
initialize: function() {
},
});

export default Contact;
