import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // Compile a template to be shared between the  individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    // Create a ContactView for each task
    this.contactList = [];

    this.model.forEach(function(rawContact) {
      console.log("in roledex_view -- rawContact : " + rawContact.name);
      this.addContact(rawContact);
    }, this); // bind `this` so it's available inside forEach

    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    ///NOTE: the order of the listenTo actions don't matter here, what does matter is what order backbone says they run in so look at the docs!!!

    // When a model is added to the collection, add a card for it
    this.listenTo(this.model, 'add', this.addContact);

    // Re-render the whole list when the collection changes
    // notice we use 'update' for a collection and in a model we used 'change'
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.contactList.forEach(function(card) {
      // Cause the task to render
      card.render();

      // Add that HTML to our task list
      this.listElement.append(card.$el);
    }, this);

    return this; // enable chained calls
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'cancelInput',
    'click #contact-details': 'ModalHandler',
  },

  ModalHandler: function(event) {
    event.stopPropagation();

    console.log("Modal Handler called!");
    // $('#contact-details').show();
  },

  // Turn a raw contact into a Contact model, add it to our list of contacts,
  // create a card for it, and add that card to our list  of cards.
  addContact: function(contact) {
    // Create a card for the new contact
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    // Add the card to our card list
    this.contactList.push(card);
    console.log("in roledex_view -- addContact : " + this.contactList);
  },

  createContact: function(event) {
    // Normally a form submission will refresh the page.
    // Suppress that behavior.
    console.log("createContact called!");
    event.preventDefault();
    // Add the contact to our Collection
    var rawContact = this.getInput();
    this.model.add(rawContact);

    // Clear the input form so the user can add another task
    this.cancelInput();
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  cancelInput: function(event) {
    console.log("cancelInput called!");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }
});

export default RolodexView;
