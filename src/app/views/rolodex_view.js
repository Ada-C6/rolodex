import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.listElement = this.$('#contact-cards');
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
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput'
  },

  createContact: function(event) {
    console.log("$$$$$$$");
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
    console.log(card);
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  clearInput: function() {
    console.log("clearInput called!");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }

});
export default RolodexView;
