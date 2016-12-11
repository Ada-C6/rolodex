import Backbone from 'backbone';


const Contact = Backbone.Model.extend({
  defaults: {
    name: 'name',
    email: 'name@email.com',
    phone: '777-777-777'
  },
  initialize: function(options){
    console.log('new contact created for: ' +
  this.get("name"));
  }
});

export default Contact;
