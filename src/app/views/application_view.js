import $ from 'jquery';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Daria',
    email: 'no@nah.com',
    phone: '5551112222',
  },
  {
    name: 'Quinn',
    email: 'imcute@popular.com',
    phone: '5551234567',
  },
  {
    name: 'Jane',
    email: 'amiga@prettyrad.com',
    phone: '5552223333',
  },
  {
    name: 'Trent',
    email: 'newnameideas@mystikspiral.com',
    phone: '5556667878',
  },
  {
    name: 'Brittany',
    email: 'thebest@cheerleader.com',
    phone: '5559873456',
  },
];

const ApplicationView = Backbone.View.extend({
  // this.$el is 'html'

  initialize: function() {
    // Instantiate Rolodex & RolodexView
    this.rolodex = new Rolodex(contactData);
    this.rolodexView = new RolodexView({
      el: $('main'),
      model: this.rolodex
    });

    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]'),
    };

    // Listen for edit clicks on Modal (coming from RolodexView)
    this.listenTo(this.rolodexView, 'edit:click', this.editContact);

    // I believe this prevents need for $(document).ready in app.js?
    this.render();
  },

  render: function() {
    this.rolodexView.render();
    return this;
  },

  events: {
    'click': 'hideModal', // NOTE: this event listens on entire $el ()
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput'
  },

  createContact: function(event) {
    // console.log("Yo, save button got clicked"); // NOTE: log

    // Prevent default form submit action (new GET req?)
    event.preventDefault();

    // Collect input values from form
    var contact = this.getInput();

    // console.log("in createContact. this.rolodex start: " + this.rolodex); // NOTE: log

    // Check whether user is editing an existing contact; if so, destroy its Contact model & remove the currentContact variable
    if (typeof this.currentContact != 'undefined') {
      // console.log("Contact currently exists..."); // NOTE: log
      this.currentContact.destroy();
      // console.log("currentContact name: " + this.currentContact.name); // NOTE: log
      delete this.currentContact;
      // console.log("after delete: currentContact name: " + this.currentContact); // NOTE: log
      // console.log("this.rolodex after destroy: " + this.rolodex); // NOTE: log
    }

    // Add new/updated Contact Model to Rolodex Collection
    this.rolodex.add(contact);

    // console.log("this.rolodex end (after add): " + this.rolodex); // NOTE: log

    // Clear Input on the form fields
    this.clearInput();
  },

  editContact: function(contact) {
    // console.log("editContact!!!"); // NOTE: log
    // console.log("contact.name " + contact.name); // NOTE: log

    // Populate form with current Contact attributes & hide the Modal
    this.setInput(contact);
    this.hideModal();

    // Set a variable to track the currentContact (this is used to instruct createContact method to remove old Contact before creating the updated Contact)
    this.currentContact = contact;
  },

  getInput: function() {
    // console.log("Getting Input"); // NOTE: log

    // Get the currently-entered values from each input element
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };

    return contact;
  },

  clearInput: function() {
    // console.log("Clearing Input"); // NOTE: log

    // reset each form input element to an empty string
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');

    // If form had been editing a currentContact, delete currentContact variable to reset
    if (typeof this.currentContact != 'undefined') {
      // console.log("currentContact name: " + this.currentContact.name); // NOTE: log
      delete this.currentContact;
      // console.log("after delete: currentContact name: " + this.currentContact); // NOTE: log
    }
  },

  setInput: function(contact) {
    // Populate form input fields with current Contact data
    this.input.name.val(contact.get('name'));
    this.input.email.val(contact.get('email'));
    this.input.phone.val(contact.get('phone'));
  },

  hideModal: function(event) {
    // console.log("Modal should go away now..."); // NOTE: log
    this.$('#contact-details').hide();
  }

});

export default ApplicationView;
