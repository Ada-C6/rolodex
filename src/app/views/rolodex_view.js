// this is the view of the entire rolodex with all of the Contacts
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate =  _.template($('#tmpl-contact-card').html());


    // the <ul> element that the contact cards will live within
    this.listElement = this.$('#contact-cards');


    // // a list of contact views
    this.cardList = [];


    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);  //triggers the listener for `add` and `update`
    }, this);

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    //when a model is added to the collection, create a card for that model and add it to our list of cards
    this.listenTo(this.model, 'add', this.addContact);
    //when the model updates, re-render the list of cards
    this.listenTo(this.model, 'update', this.render);

  },

  render: function() {
    //clear the list in the DOM
    this.listElement.empty();

    //Loop through the card list
    this.cardList.forEach(function(card) {
      card.render();

      //append
      this.listElement.append(card.$el);
    }, this);

    return this; //enable chained calls
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput'
  },

  clearInput: function(event) {
    // console.log("====clearInput=====");
    this.input.name.val("");
    this.input.email.val("");
    this.input.phone.val("");
  },

  createContact: function(event) {
    // console.log("========CREATING CONTACT=======");
    event.preventDefault();

    // Get the input data from the form and turn it into a contact
    var rawContact = this.getInput();

    //add the contact to our collection
    this.model.add(rawContact);

    // Clear the input form so the user can add another contact
    this.clearInput();
  },

  addContact: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    // console.log("======the card is:" + JSON.stringify(card));

    this.cardList.push(card);
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val(),
    };
    // console.log("==========Contact name is: " + JSON.stringify(contact));
    return contact;
  }
});

export default RolodexView;
