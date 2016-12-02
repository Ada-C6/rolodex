import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';



const RolodexView = Backbone.View.extend({
  initialize: function() {

    // Compile templates to be shared between the contacts
    this.cardTemplate = _.template($('#tmpl-contact-card').html());
    this.modalTemplate = _.template($('#tmpl-contact-details').html());

    // Keep track of the <ul> element - passed from the ApplicationView so we know about it
    this.listElement = this.$el;

    this.cardList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
      }, this); // bind `this` so it's available inside forEach

    // When a model is added to the collection, add a card for it
    this.listenTo(this.model, 'add', this.addContact);

    // Re-render the whole rolodex when the collection changes

    this.listenTo(this.model, 'update', this.render);

  },

  addContact: function(contact) {

    // Create a card for the new contact
    var card = new ContactView({
      model: contact,
      cardTemplate: this.cardTemplate,
      modalTemplate: this.modalTemplate
    });

    // Add the card to our card list
    this.cardList.push(card);

    // listen to the cards for when we are trying to edit it through the form
    // this.listenTo(card, 'populateForm', this.populateFormHandler);


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
  },

  // populateFormHandler: function(contact) {
  //   console.log('in PopulateFormHanler');
  //   this.trigger('setInput', contact);
  // }

});

export default RolodexView;
