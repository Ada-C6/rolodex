import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.listElement = this.$('#tmpl-contact-card');
    this.cardList = [];

    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this); // bind `this` so it's available inside forEach

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    this.listenTo(this.model, 'add', this.addContact);

    this.listenTo(this.model, 'remove', this.removeContact);

    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    this.listElement.empty();
    this.cardList.forEach(function(card) {
      card.render();
      this.listElement.append(card.$el);
    }, this);
    return this; // enable chained calls
  },

  events: {
    'submit .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput'
  },

  createContact: function(event) {
    event.preventDefault();

    // Get the input data from the form and turn it into a contact
    var rawContact = this.getInput();

    // Add the contact to the collection
    this.model.add(rawContact);

    // Clear the input form so the user can add another contact
    this.clearInput();
  },

  addContact: function(contact) {
    // Create a card for the new contact
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    // Add the card to our card list
    this.cardList.push(card);
  },

  removeContact: function(contact) {
    var filteredList = [];
    this.cardList.forEach(function(card) {
      if (card.model != contact) {
        filteredList.push(card);
      }
    });
    this.cardList = filteredList;
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  clearInput: function(event) {
    console.log("clearInput called!");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }

});
export default RolodexView;
