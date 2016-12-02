import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.modalTemplate = _.template($('#tmpl-contact-details').html());
    this.modalDetails = this.$('#contact-details');

    // Create a ContactView for each contact
    this.contactList = [];

    this.model.forEach(function(contact) {  // Loop through contact data above
      this.addContact(contact);
    }, this);

    // When a model is added to the collection, add a card for it
    this.listenTo(this.model, 'add', this.addContact);

    // Re-render the whole list when the collection changes
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    // Make sure the list in the DOM is empty before we start appending items
    this.$el.empty();

    // Loop through the data assigned to this view
    this.contactList.forEach(function(contact) {
      // Cause the contact to render
      contact.render();
      // Add that HTML to our rolodex
      this.$el.append(contact.$el); // $el is getting the div that represents a card and inserting it into the page
    }, this);

    return this; // enable chained calls
  },

  events: {
    'click': 'hideModal'
  },

  addContact: function(contact) {
    var info = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.listenTo(info, 'showModal', this.showModal);
    this.listenTo(info, 'hideModal', this.hideModal);

    this.contactList.push(info);

    return this;
  },

  showModal: function(contact) {
    // console.log("contact.model.attributes", contact.model.attributes);
    $('#contact-details').show(); // No clue why this works with jquery but not this.modalDetails
    var html = this.modalTemplate(contact.model.attributes);
    // console.log("html", html);
    $('#contact-details').html(html); // No clue why this works with jquery but not this.modalDetails
  },

  hideModal: function(event) {
    console.log("hideModal called");
    $('#contact-details').hide();
  }
});

export default RolodexView;
