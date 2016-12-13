import Backbone from 'backbone';
import $ from 'jquery';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import _ from 'underscore';

const RolodexView = Backbone.View.extend({
  initialize: function(incomingInfo) {
    // Store the incoming contacts and template
    this.contacts = incomingInfo.contacts;
    this.template = incomingInfo.cardTemplate;

    // Store any input that comes in through the form
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    };
  },
  render: function() {
    // Locate the place you want to show individual contact cards
    this.cardPlacement = $("#contact-cards");

    // Loop through the contacts and generate new Contact view for each one. Store that contact view in a storage array
    var storage = [];
    this.contacts.forEach(function(individualContact){
      var newContactView = new ContactView(
        {contact:
          {
            name: individualContact.attributes.name,
            email: individualContact.attributes.email,
            phone: individualContact.attributes.phone
          },
        cardTemplate: this.template
      });
      storage.push(newContactView);
    }, this);


    // Loop through the contacts and render it. Appendt the render to the designated placement.
    storage.forEach(function(contact) {
      this.cardPlacement.append(contact.render().$el);
    }, this);
  },

  events: {
    'click .btn-save' : 'createContact',
    'click .btn-cancel' : 'clearInput',
    'click' : 'hideModal'
  },

  createContact: function(event) {
    // Prevent standard form submit upon creating a contact
    event.preventDefault();

    // Push this new contact into the contact list
    this.contacts.push(this.getInput());

    // Empty out the card placement list
    this.cardPlacement.empty();

    // Rerender the whole thing!
    this.render();

    // Clear the import form
    this.clearInput();
  },

  // Transform the form input into usable data
  getInput: function() {
    var actualContactData = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };

    // Return the usable data to the caller
    return actualContactData;
  },

  // This will clear the input form
  clearInput: function() {
    this.input.name.val("");
    this.input.email.val("");
    this.input.phone.val("");
  },

  hideModal: function() {
    // If the Contact Details is visible, hide it.
    if ($("#contact-details").css("display") !== 'none') {
      $("#contact-details").hide();
    }
  }
});

export default RolodexView;
