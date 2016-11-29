import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from 'app/views/contact_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // Store a the full list of contacts
    this.contactData = options.contactData;
    // Compile a template to be shared between the individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    // Create a ContactView for each task
    this.rolodex = [];
    // console.log(contactData);
    this.rolodex.forEach(function(contact) {
      var contactCard = new ContactView({
        contact: contact,
        template: this.contactTemplate
      });
      this.rolodex.push(contactCard);
    }, this);
      // this.render();
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.rolodex.forEach(function(contactCard) {
      // Cause the contact to render
      contactCard.render();

      // Add that HTML to our contact list
      this.listElement.append(contactCard.$el);
    }, this);

    return this;
  }
});

export default ApplicationView;
