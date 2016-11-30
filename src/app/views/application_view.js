import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';


const ApplicationView = Backbone.View.extend({

  initialize: function() {
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
    // rolodex is already attached to the page so we don't have to append
    // this.el.append(this.rolodexView.el);

    return this;
  },

  events: {
  'click .btn-cancel': 'clearInput',
  'click .btn-save': 'createTask',
  'click #contact-cards': 'hideModal',
  // 'click #contact-details': 'hideModal',
  'click header': 'hideModal'
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

  createTask: function(event) {
    event.preventDefault();

    var rawContact = this.getInput();

    // Add the contact to the collection
    this.rolodex.add(rawContact);

    // Clear the input form so the user can add more contacts
    this.clearInput();
    console.log("createTask called");
  },

  hideModal: function() {
    console.log('Hide modal triggered');
    this.modal.hide();
  },

  // protectContactChildren: function(event) {
  //   $(".header a").click(function(event) {
  //      e.stopPropagation();
  //   });
  // }

});

export default ApplicationView;
