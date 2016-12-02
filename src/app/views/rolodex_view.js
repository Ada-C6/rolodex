import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // Compile a template to be shared between the individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    // We'll keep track of a list of contact models and a list
    // of contact views.
    this.contactList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this); // bind `this` so it's available inside forEach

    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    };

    // When a model is added to the collection, create
    // a card for that model and add it to our list of cards
    this.listenTo(this.model, 'add', this.addContact);

    // When the model updates, re-render the list of cards
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(contact) {
      // Cause the contact to render
      contact.render();

      // Add that HTML to our contact list
      this.listElement.append(contact.$el);
    }, this);

    return this; // enable chained calls
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput'
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      phone: this.input.phone.val(),
      email: this.input.email.val()
    };
    return contact;
  },

  clearInput: function(event) {
    this.input.name.val('');
    this.input.phone.val('');
    this.input.email.val('');
  },

  addContact: function(contact) {
    // Create a card for the new contact
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    // Add the card to our card list
    this.contactList.push(card);
  },

  createContact: function(event) {
    event.preventDefault();

    // Get the input data from the form and turn it into a contact
    var rawContact = this.getInput();

    // Add the contact to our collection
    this.model.add(rawContact);

    // Clear the input form so the user can add another contact
    this.clearInput();
  },

});

export default RolodexView;
