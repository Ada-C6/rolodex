import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

const ApplicationView = Backbone.View.extend({
  initialize: function(options){
    this.form = this.$('.contact-form');
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };
  },
  render: function() { },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput',
  },

  createContact: function(event) {
    event.preventDefault();
    var rawContact = this.getInput();
    this.model.add(rawContact);
    this.clearInput();
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val(),
    };
    return contact;
  },

  clearInput: function(event) {
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },
});

export default ApplicationView;
