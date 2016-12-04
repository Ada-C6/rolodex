import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';
//application is responsible for the form, I percieve this to need also, the logic and listening of changes made to the form.


const ApplicationView = Backbone.View.extend({
  initialize: function(options){
    this.details = $('#contact-details');
    this.form = this.$('.contact-form');
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };
  },
  render: function() {
    this.details.hide();
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput',
  },

  createContact: function(event) {
    event.preventDefault();
    // Add the contact to our Collection
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
    console.log("clearInput called!");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },
});

export default ApplicationView;
