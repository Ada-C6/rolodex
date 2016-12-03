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
  // this.$el is '#application'

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

    this.listenTo(this.rolodexView, 'edit:click', this.editContact);

    // I believe this prevents need for $(document).ready activation?
    this.render();
  },

  render: function() {
    this.rolodexView.render();
    return this;
  },

  events: {
    'click': 'hideModal', // NOTE: this event listens on entire element
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput'
  },

  createContact: function(event) {
    // console.log("Yo, save button got clicked"); // NOTE: log

    // prevent default form submit action (new GET req?)
    event.preventDefault();

    var contact = this.getInput();

    console.log("in createContact. this.rolodex start: " + this.rolodex);

    if (this.existingContact === true) {
      console.log("Contact currently exists...");
      this.currentContact.destroy();
      this.existingContact = false;
      console.log("this.rolodex after destroy: " + this.rolodex);
    }
    // if (_.contains(this.rolodex, contact)) {
    //   console.log();
    // }
    // add new Contact Model to Rolodex Collection
    this.rolodex.add(contact);

    console.log("this.rolodex end (after add): " + this.rolodex);

    // clear Input on the form fields
    this.clearInput();
  },

  editContact: function(contact) {
    console.log("editContact!!!"); // NOTE: log
    // console.log("this.contact " + this.contact);
    console.log("contact " + contact); // NOTE: log
    console.log("contact.name " + contact.name); // NOTE: log
    // console.log("editContact " + this.contact.name); // NOTE: log

    this.setInput(contact);

    this.hideModal();

    this.existingContact = true;
    this.currentContact = contact;
    // contact.destroy();

  },

  getInput: function() {
    // console.log("Getting Input"); // NOTE: log

    // get the currently-entered values from each input element
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };

    return contact;
  },

  clearInput: function() {
    // console.log("Clearing Input"); // NOTE: log

    // reset the each input element to an empty string
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');

    if (this.existingContact === true) {
      this.existingContact = false;
      console.log("currentContact name: " + this.currentContact.name);
      delete this.currentContact;
      console.log("after delete: currentContact name: " + this.currentContact);
    }
  },

  setInput: function(contact) {
    // console.log(""); // NOTE: log TODO: remove if empty
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
