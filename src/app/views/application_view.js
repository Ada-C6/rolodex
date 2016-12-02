import Backbone from 'backbone';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    var contactData = [
      {
        name: 'Freddie',
        phoneNumber: 123456,
        email: 'fred@msn.com'
      },
      {
        name: 'Shadow',
        phoneNumber: 5555555,
        email: 'shadow@example.com'
      },
      {
        name: 'Mochi',
        phoneNumber: 7922222,
        email: 'mochi@example.com'
      }];

    // Keep track of form input fields
    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phoneNumber: this.$('.contact-form input[name="phone"]')
    };

    var contactList = new Rolodex(contactData);

    this.rolodexView = new RolodexView({
      el: 'main',
      model: contactList
    });
  },

  render: function() {
    this.rolodexView.render();
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearContact'
  },

  clearContact: function(event) {
    this.input.name.val('');
    this.input.email.val('');
    this.input.phoneNumber.val('');
  },

  createContact: function(event) {
    event.preventDefault();
    var contact = this.getInput();

    this.rolodexView.model.add(contact);

    this.clearContact();
  },

  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phoneNumber: this.input.phoneNumber.val()
    };
    return contact;
  }

});

export default ApplicationView;
