import $ from 'jquery';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';


var contactInfo = [
  {
    name: 'Ian',
    email: 'ian@ian.com',
    phone: '4125556765'
  }, {
    name: 'Erik',
    email: 'erik@erik.com',
    phone: '7035553245'
  }, {
    name: 'Mariah',
    email: 'mariah@mariah.com',
    phone: '6125553257'
  }
];

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    console.log("Bueller?");
    this.rolodex = new Rolodex(contactInfo);
    this.rolodexView = new RolodexView({
      el: $('#contact-cards'),
      model: this.rolodex
    });

    this.rolodexView.render();

    this.render();

    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    // When a model is added to the collection, add a card for it
    this.listenTo(this.model, 'add', this.addContact);

    // Re-render the whole list when the collection changes
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    return this;
  },

  events: {
    'click .btn-cancel': 'clearInput', // Listen for click on an element with clear-button class
    'submit .contact-form': 'createContact'
  },

  clearInput: function(event) {
    console.log("clearInput called");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  createContact: function(event) {
    event.preventDefault();
    // Get the input data from the form and turn it into a task
    var contact = this.getInput();

    // Add the task to our Collection
    this.model.add(contact);

    // Clear the input form so the user can add another task
    this.clearInput();
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  addContact: function(contact) {
    var info = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.contactList.push(info);
  }
});

export default ApplicationView;
