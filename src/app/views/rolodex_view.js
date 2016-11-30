import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';



const RolodexView = Backbone.View.extend({
  initialize: function() {

    // Compile a template to be shared between the contacts
    this.cardTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element - passed from the ApplicationView so we know about it
    this.listElement = this.$el;

    this.cardList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
      }, this); // bind `this` so it's available inside forEach

    // When a model is added to the collection, add a card for it
    this.listenTo(this.model, 'add', this.addContact);

    // // When a model is removed from the collection, remove the card for it from the list of cards
    // this.listenTo(this.model, 'remove', this.removeTask);
    //
    // Re-render the whole rolodex when the collection changes
    this.listenTo(this.model, 'update', this.render);

  },

  addContact: function(contact) {

    // Create a card for the new contact
    var card = new ContactView({
      model: contact,
      template: this.cardTemplate
    });

    // Add the card to our card list
    this.cardList.push(card);

    return this;
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Cause the contact to render
      card.render();

      // Add that HTML to our rolodex
      this.listElement.append(card.el);
    }, this);

    return this; // enable chained calls
  }
});

export default RolodexView;
