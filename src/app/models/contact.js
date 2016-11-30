import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: 'Stand-in name',
    email: 'email@standin.com',
    number: 'xxx-xxx-xxxx'
  },
  initialize: function(options) {
    console.log("contact created with : " + this.get('name'));
  }
});

export default Contact;
