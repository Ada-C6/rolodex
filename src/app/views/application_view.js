import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
//application is responsible for the form


const ApplicationView = Backbone.View.extend({
  initialize: function(options){
    // Keep track of our form input fields
  
    // this.listElement = this.$('.contact-cards');
    // this.contactTemplate = _.template($('#tmpl-contact-details').html());
    //
    // this.contactList = [];
    //
    // this.model.forEach(function(rawContact) {
    //   this.addContact(rawContact);
    // }, this);

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[email="email"]'),
      phone: this.$('.contact-form input[phone="phone"]')
    };

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.render);
    this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'remove', this.removeContact);
  },

  render: function() {
    this.listElement.empty();
    this.contactList.forEach(function(contacts) {
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
    addContact: function(contact) {
      var contactDetails = new ContactView({
        model: contact,
        template: this.contactTemplate
      });
      this.contactList.push(contact);
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
    }
  });

  export default ApplicationView;
