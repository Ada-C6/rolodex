import Backbone from 'backbone';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();

    // Keep track of form input fields
    this.input = {
      name: this.$('contact-form input[name="name"]'),
      email: this.$('contact-form input[name="email"]'),
      phoneNumber: this.$('contact-form input[name="phone"]')
    };
  },

  render: function() {
    return this;
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearContact'
  },

  clearContact: function(event) {
    console.log('clearContact called');
    console.log(this.input);
    this.input.name.val('');
    this.input.email.val('');
    this.input.phoneNumber.val('');
    console.log(this.input);
  },

  createContact: function(event) {
    alert('create called');
  }

});

export default ApplicationView;
