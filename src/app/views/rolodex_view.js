import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // Compile a template to be shared between the individual tasks
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    this.listElement = this.$('#contact-cards');

    this.cardList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    this.input = {
      name: this.$('.columns input[name="name"]'),
      phoneNumber: this.$('.columns input[name="phone"]'),
      email: this.$('.columns input[name="email"]')
    };

    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContact);

  }, // END OF INITIALIZE FUNCTION

  render: function() {
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      card.render();

      // Add that HTML to our contact list
      this.listElement.append(card.$el);
    }, this);
    return this;
  },

  events: {
    'click .btn-cancel': 'clearInput',
    'click .btn-save': 'createContact'
  },

  clearInput: function(event) {
    this.input.name.val('');
    this.input.phoneNumber.val('');
    this.input.email.val('');
  },

  createContact: function(event) {
    event.preventDefault();
    var contact = new Contact(this.getInput());
    this.model.add(contact);
    this.clearInput();
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      phoneNumber: this.input.phoneNumber.val(),
      email: this.input.email.val()
    };
    return contact;
  },

  addContact: function(contact) {

    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    // Add the card to our card list
    this.cardList.push(card);
  }
});

export default RolodexView;
