import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';


const ApplicationView = Backbone.View.extend({

  initialize: function() {
    console.log(this.el);
    this.rolodex = this.model.contactList;

    this.modal = $('#contact-details');
    // modal must be hidden until we hover a contact
    this.modal.hide();

    this.rolodexView = new RolodexView({
      el: '#contact-cards',
      model: this.rolodex
      });

    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phoneNumber: this.$('.contact-form input[name="phone"]')
    };
  },

  render: function() {
    this.rolodexView.render();
    // this.render();
    // rolodex is already attached to the page so we don't have to append
    // this.el.append(this.rolodexView.el);

    return this;
  },

  events: {
  'click .btn-cancel': 'clearInput',
  'click .btn-save': 'createContact',
  'click .btn-edit': 'populateForm',
  'click *': 'hideModal',
  'click .contact-card': 'showModal',
  'click #contact-details': 'showModal'
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phoneNumber: this.input.phoneNumber.val()
    };
    return contact;
  },

  clearInput: function(event) {
    console.log("clearInput called");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phoneNumber.val('');
  },

  createContact: function(event) {
    event.preventDefault();

    var rawContact = this.getInput();

    // Add the contact to the collection
    this.rolodex.add(rawContact);

    // Clear the input form so the user can add more contacts
    this.clearInput();
  },

  populateForm: function(event) {
    console.log("populateForm called");
    // this.input.name.val('');
    // this.input.email.val('');
    // this.input.phoneNumber.val('');
  },

  hideModal: function() {
    this.modal.hide();
  },

  showModal: function(event) {
    // when contact card or contact detail are clicked, we want to prevent them from being hidden
    event.stopPropagation();
    this.modal.show();
  }
});

export default ApplicationView;
