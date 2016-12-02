import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';
import ContactFormView from 'app/views/contact_form_view';

import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';


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

    this.contact = new Contact();

    this.formView = new ContactFormView({
      el: '.contact-form',
      model: this.contact,
      collection: this.rolodex,
      // Keep track of our form input fields
      input: {
        name: this.$('.contact-form input[name="name"]'),
        email: this.$('.contact-form input[name="email"]'),
        phoneNumber: this.$('.contact-form input[name="phone"]')
      }
    });

    // this.listenTo(this.rolodexView, 'setInput', this.setInput);
    // this.listenTo(this, 'editContact', this.updateContact);
  },



  render: function() {
    this.rolodexView.render();
    this.formView.render();
    // this.render();
    // rolodex is already attached to the page so we don't have to append
    // this.el.append(this.rolodexView.el);

    return this;
  },

  events: {
  'click *': 'hideModal',
  'click .contact-card': 'showModal',
  'click #contact-details': 'showModal',
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
