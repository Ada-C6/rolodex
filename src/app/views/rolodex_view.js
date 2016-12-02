import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {

    // Template to be shared between individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    // Create a ContactView for each contact
    this.contactList = [];
    this.model.forEach(function(contact) {

      // Add contact to list of contacts
      this.addContact(contact);
    }, this);

    // When a model is added to the collection, create a contact and add it to the list of contacts
    this.listenTo(this.model, 'add', this.addContact);

    // When the model updates, re-render the list of cards
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    // Loop through data
    this.contactList.forEach(function(contact) {
      contact.render();

      // Add HTML to contact list
      this.listElement.append(contact.$el);
    }, this);
    return this;
  },

  addContact: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.contactList.push(card);
  }

});

export default RolodexView;
