import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import ContactView from 'app/views/contact_view';

var RolodexView = Backbone.View.extend({

  initialize: function(options){

    this.contactNameTemplate = _.template($('#tmpl-contact-card').html());

    this.contactNameElement = this.$('#contact-cards');

    console.log("Contact is: ", this.contactNameElement);

    this.contactList = [];

    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this);

    // this.input = {
    //   name: this.$('.contact-form input[name="name"]'),
    //   email: this.$('.contact-form input[name="email"]'),
    //   phoneNumber: this.$('.contact-form input[name="phoneNumber"]')
    // };
  },

  render: function() {
    this.contactNameElement.empty();

    this.contactList.forEach(function(contact) {
      contact.render();
      this.contactNameElement.append(contact.$el);
    }, this);
    return this;
  },

  addContact: function(contact_info) {

    var contact = new ContactView({
      model: contact_info,
      template: this.contactNameTemplate
    });

    this.contactList.push(contact);
  },

});

export default RolodexView;
