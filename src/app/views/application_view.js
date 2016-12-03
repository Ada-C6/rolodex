import $ from 'jquery';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Daria Morgendorffer',
    email: 'no@nah.com',
    phone: '5551112222',
  },
  {
    name: 'Quinn Morgendorffer',
    email: 'imcute@popular.com',
    phone: '5551234567',
  },
  {
    name: 'Jane Lane',
    email: 'amiga@prettyrad.com',
    phone: '5552223333',
  },
  {
    name: 'Trent Lane',
    email: 'newnameideas@mystikspiral.com',
    phone: '5556667878',
  },
  {
    name: 'Brittany Taylor',
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

    // add new Contact Model to Rolodex Collection
    this.rolodex.add(contact);

    // clear Input on the form fields
    this.clearInput();
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
  },

  hideModal: function(event) {
    console.log("Modal should go away now...");
    this.$('#contact-details').hide();
  }

});

export default ApplicationView;
