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

  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    // this.listElement.empty();

    // Loop through the data assigned to this view
    this.contactList.forEach(function(card) {
      // Cause the task to render
      card.render();

      // Add that HTML to our task list
      this.listElement.append(card.$el);
    }, this);

    return this; // enable chained calls
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
  }
});

export default RolodexView;
