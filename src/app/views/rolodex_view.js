import Backbone from 'backbone';
import $ from 'jquery';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import _ from 'underscore';

const RolodexView = Backbone.View.extend({
  initialize: function(incomingInfo) {
    console.log("15. You're starting to create the RolodexView");
    console.log(incomingInfo);

    // Store the incoming contacts and template
    this.contacts = incomingInfo.contacts;
    this.template = incomingInfo.cardTemplate;
    console.log("You're trying to save a template");
    console.log(this.template);

    // Store any input that comes in through the form
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    };


  },
  render: function() {
    console.log("25. You are rendering the RolodexView");

    // Locate the place you want to show individual contact cards
    this.cardPlacement = $("#contact-cards");

    // Loop through the contact cards and generate new html for each card. Append that html to general html
    var storage = [];
    this.contacts.forEach(function(individualContact){
      console.log("You're in the RolodexView initialize one contact!");
      console.log(individualContact.attributes.name);
      console.log(this.template);

      var newContactView = new ContactView(
        {contact:
          {
            name: individualContact.attributes.name,
            email: individualContact.attributes.email,
            phone: individualContact.attributes.phone
          },
        cardTemplate: this.template,
        el: this.cardPlacement
      });

      storage.push(newContactView);
      // newContactView.render();
    }, this);

    storage.forEach(function(contact) {
      contact.render();
    });

    return this;
  },

  events: {
    'click .btn-save' : 'createContact',
    'click .btn-cancel' : 'clearInput',
    // SOMETHING SHOULD GO HERE TO MAKE IT DISAPPEAR CORRECTLY
    // 'click ' : 'hideModal'
  },

  createContact: function(event) {
    // Prevent standard form submit upon creating a contact
    event.preventDefault();
    console.log("trying to create a new contact!!");
    console.log("******************");
    console.log(this.input.name.val());

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

    return actualContactData;
  },


  // This will clear the input form
  clearInput: function() {
    console.log("clearInput called");
    this.input.name.val("");
    this.input.email.val("");
    this.input.phone.val("");
    console.log('Form area should now be clear');
  }


});

export default RolodexView;
