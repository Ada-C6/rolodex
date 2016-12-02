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

    // model here is a collection of Contact models, which was instantiated in app.js: var contactList = new Rolodex(contactData);
    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this);

    // I am binding the rules for the Backbone models here.
    this.listenTo(this.model, 'add', this.addContact); // setting up the rule. this.addContact will be triggered in the middle of the Backbone Model's code that process createContact >> this.model.add(rawContact) [run the Sources in Inspect/choose this line and press arrow button to see how the code evaluates the 'add' and 'update' functions in backbone.js]
    this.listenTo(this.model, 'update', this.render);
  },

  addContact: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.cardList.push(card);
  },

  render: function() {
    this.listElement.empty();

    this.cardList.forEach(function(card) {
      card.render();
      this.listElement.append(card.$el);
    }, this);

    return this;
  },

  events: {
    'click .btn-save' : 'createContact',
    'click .btn-cancel' : 'clearInput'
  },

  getInput: function() {
    var contact = {
      name: this.$('input')[0].value,
      email: this.$('input')[1].value,
      phone: this.$('input')[2].value,
    };
    return contact;
  },

  createContact: function(event) {
    console.log("createContact called");
    // event.preventDefault(); // this is a click event, which is different from a submit event (Dan's example). therefore it doesnt affect the page reloading.
    var rawContact = this.getInput();
    this.model.add(rawContact); // go into backbone.collection and add a new contact
    this.clearInput();
  },

  clearInput: function(event) {
    console.log("clearInput called");
    // what worked:
    // this.$('input')[0].value = '';
    // this.$('input')[1].value = '';
    // this.$('input')[2].value = '';

    // trying now // similar to CSS selector
    this.$('.contact-form input[name="name"]').val('');
    this.$('.contact-form input[name="email"]').val('');
    this.$('.contact-form input[name="phone"]').val('');
  },
});

export default RolodexView;
