import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('.contact-cards');

    // Create a ContactView for each contact
    this.contactList = [];

    this.model.forEach(function(contact) {  // Loop through contact data above
      this.addContact(contact);
    }, this);
  },

  render: function() {
    // Make sure the list in the DOM is empty before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.contactList.forEach(function(contact) {
      // Cause the contact to render
      contact.render();
      // Add that HTML to our rolodex
      this.listElement.append(contact.$el); // $el is getting the div that represents a card and inserting it into the page
    }, this);

    return this; // enable chained calls
  },

  addContact: function(contact) {
    var info = new Contact({
      model: contact,
      template: this.taskTemplate
    });

    this.contactList.push(info);
  }
});

export default RolodexView;
