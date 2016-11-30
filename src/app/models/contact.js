import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  defaults: {
    name: 'name',
    email: 'name@email.com',
    phone: '777-777-777'
  },
  initialize: function(){
    console.log('new contact created')
  }
});

export default Contact;
