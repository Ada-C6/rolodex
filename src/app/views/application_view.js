import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';
//application is responsible for the form, I percieve this to need also, the logic and listening of changes made to the form.


const ApplicationView = Backbone.View.extend({
  initialize: function(options){
    // Keep track of our form input fields
  },

  render: function() {
    this.listElement.empty();
    this.contactList.forEach(function(options) {
      contacts.render();
      this.listElement.append(contacts.$el);
    }, this);
    return this; // enable chained calls
  },

  events: {
    'submit .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput',
  },

  createContact: function(event) {
    event.preventDefault();
    // Add the contact to our Collection
    var rawContact = this.getInput();
    this.model.add(rawContact);
    this.clearInput();
  },

  removeContact: function(contact){
    var desirables = [];
    this.contactList.forEach(function(contactCard){
      if (contactCard.model != contact) {
        undesirables.push(contact);
      }
    });
    this.contactList = desirables;
  },

  addContact: function(contact) {
    var contactCard = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.contactList.push(contactCard);
  },
  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val(),
    };
    return contact;
  },

  clearInput: function(event) {
    console.log("clearInput called!");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },
});

export default ApplicationView;
