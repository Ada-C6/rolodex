import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';

const RolodexView = Backbone.View.extend({

  initialize: function(options) {
    this.contactTemplate = _.template($("#tmpl-contact-card").html());

    this.cardsSection = this.$("#contact-cards");

    this.cardList = [];

    console.log("this.model is: " + this.model);
    this.model.forEach(function(contact) {
      this.addContactCard(contact);
    }, this);

    console.log("-------------->" + this.cardList);

    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    // when a model is added to the collection, create a card
    // for the model and add it to our list of cards
    this.listenTo(this.model, 'add', this.addContactCard);

    // when the model collection updates, re-render the list of cards
    this.listenTo(this.model, 'update', this.render);

    // when the model is removed throm the collection,
    // remove the card for that task from our list of cards
    // this.listenTo(this.model, 'remove', this.removeTask);
  },

  render: function() {
    this.cardList.forEach(function(card) {
      card.render();
      this.cardsSection.append(card.$el);
    }, this);

    return this;
  },

  addContactCard: function(contact) {
    var card = new ContactView({
      template: this.contactTemplate,
      model: contact
    });

    this.cardList.push(card);
  },

  events: {
    'click .btn-save': 'createNewContact',
    'click .btn-cancel': 'clearInput'
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  createNewContact: function(event) {
    // Normally a form submission will refresh the page.
    // Suppress that behavior.
    event.preventDefault();

    // Get the input data from the form and turn it into a task
    var rawContact = this.getInput();

    // Keep track of this task
    this.model.add(rawContact); // add triggers two events automatically, the add event and finally the update event

    // Re-render the whole list, now including the new card
    // this.render();

    // Clear the input form so the user can add another task
    this.clearInput();
  },

  clearInput: function(event) {
    console.log("clearInput called");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }


});

export default RolodexView;
