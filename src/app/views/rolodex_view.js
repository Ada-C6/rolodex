import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {

    // Template to be shared between individual contacts
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Create a ContactView for each contact
    this.contactList = [];
    console.log(this.contactList);
    this.model.forEach(function(contact) {
      console.log(contact.attributes);
      // console.log(this.template);
      var contactCard = new ContactView({
        name: contact.attributes.name,
        // template: this.contactTemplate
      });

      // Add contact to list of contacts
      // this.contactList.push(contactCard);
      // console.log(this.contactList);

      // // Keep track of form input fields
      // this.input = {
      //   name: this.$('contact-form input[name="name"]'),
      //   email: this.$('contact-form input[name="email"]'),
      //   phoneNumber: this.$('contact-form input[name="phone"]')
      // };
    });
  },

  render: function() {
    this.contactList.forEach(function(contact) {
      card.render();
      console.log(this);
    });
  },

});

export default RolodexView;
