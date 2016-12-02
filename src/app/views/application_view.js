import $ from 'jquery';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';

var contactInfo = [
  {
    name: 'Buffy',
    email: 'buffy@buffy.com',
    phone: '4125556765'
  }, {
    name: 'Xander',
    email: 'xander@xander.com',
    phone: '7035553245'
  }, {
    name: 'Willow',
    email: 'willow@willow.com',
    phone: '6125553257'
  }, {
    name: 'Spike',
    email: 'spike@spike.com',
    phone: '3025553257'
  }
];

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    $('#contact-details').hide();
    // console.log("Bueller?");
    this.rolodex = new Rolodex(contactInfo);
    this.rolodexView = new RolodexView({
      el: $('html'),
      model: this.rolodex
    });

    this.rolodexView.render();

    // Keep track of our form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };
  },

  render: function() {
    return this;
  },

  events: {
    'click .btn-cancel': 'clearInput', // Listen for click on an element with clear-button class
    'click .btn-save': 'createContact'
  },

  clearInput: function(event) {
    console.log("clearInput called");
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  createContact: function(event) {
    console.log("createContact called");
    event.preventDefault();
    // Get the input data from the form and turn it into a contact
    var contact = this.getInput();

    // Add the task to our Collection
    this.rolodex.add(contact);

    // Clear the input form so the user can add another contact
    this.clearInput();
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  }
});

export default ApplicationView;
