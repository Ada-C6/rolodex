import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function() {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    this.contactViewList = [];

    // Process each contact
    this.model.forEach(function(contact) {
      this.addContactView(contact);
    }, this); // bind `this` so it's available inside forEach

    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]'),
    };

    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContactView);

    $('body').on('click', this.hideModal);
  },

  hideModal: function() {
    $('#contact-details').hide();
  },

  events: {
    'click .btn-save': 'createNewContact',
    'click .btn-cancel': 'clearContactInput'
  },

  render: function() {
    // Make sure the list in the DOM is empty
    // before we start appending items
    this.listElement.empty();

    // Loop through the data assigned to this view
    this.contactViewList.forEach(function(contactView) {
      contactView.render();

      this.listElement.append(contactView.$el);
    }, this);

    return this; // enable chained calls
  },

  addContactView: function(contact) {
    // Create a card for the new task
    var contactView = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    // Add the ContactView to our ContactView list
    this.contactViewList.push(contactView);
  },

  createNewContact: function() {
    var contactHash = this.getNewContactInput();
    var contact = this.model.add(contactHash);

    // Clear the input form so the user can add another contact
    this.clearContactInput();
  },

  // Build a new hash from the info gathered from the new contact form
  getNewContactInput: function() {
    var contactHash = {
      name: this.input.name.val(),
      phone: this.input.phone.val(),
      email: this.input.email.val(),
    };
    return contactHash;
  },

  clearContactInput: function(event) {
    this.input.name.val('');
    this.input.phone.val('');
    this.input.email.val('');
  },
});

export default RolodexView;
