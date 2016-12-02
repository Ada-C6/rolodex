import $ from 'jquery';
import Backbone from 'backbone';

const ContactFormView = Backbone.View.extend({
  initialize: function(options) {
    this.input = options.input;
    this.collection = options.collection;
    console.log(this.model);
    // this.template = options.template;
    // Re-render the whole form when the collection changes

    this.listenTo(this.model, 'edit', this.setInput);
  },

  render: function() {
    return this;
  },

  events: {
      'click .btn-cancel': 'clearInput',
      'click .btn-save': 'createContact'
      // 'click .btn-edit': 'editContact'
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phoneNumber: this.input.phoneNumber.val()
    };
    return contact;
  },

  setInput: function(contact) {

    console.log('in set input');
      this.input.name.val(contact.get('name'));
      this.input.email.val(contact.get('email'));
      this.input.phoneNumber.val(contact.get('phoneNumber'));
    // this.trigger('editContact', contact);
  },

  clearInput: function(event) {
    console.log("clearInput called");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phoneNumber.val('');
  },

  selectCreateOrUpdate: function(event, contact) {
    if (contact === null) {
      this.createContact();
    } else {
      this.updateContact(contact);
    }
  },

  createContact: function(event) {
    event.preventDefault();

    var rawContact = this.getInput();

    var contact = this.model.set(rawContact);
    // Add the contact to the collection
    this.collection.add(contact);

    // Clear the input form so the user can add more contacts
    this.clearInput();
  },

  updateContact: function(contact) {
    console.log("in update contact");
    console.log(contact.attributes);

    this.clearInput();
  }

});

export default ContactFormView;
