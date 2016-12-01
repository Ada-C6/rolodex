import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#contact-card').html());

    this.listElement = this.$el;

    this.cardList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    this.input = {
     name: this.$('.contact-form input[name="name"]'),
     phone: this.$('.contact-form input[name="phone"]'),
     email: this.$('.contact-form input[name="email"]')
    };

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.addContact);
  },

  render: function() {
    // var contacts = $('#contact-cards');
    // this.$el.append(contacts);
    //
    // var contact = new ContactView({
    //   el: contacts
    // });
    // contact.render();

    this.listElement.empty();

    this.cardList.forEach(function(contactCard){
      contactCard.render();

      this.listElement.append(contactCard.$el);
    }, this);

    return this;

  },

  addContact: function(contact) {
    var contactCard = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.cardList.push(contactCard);
    console.log(contactCard);
  }

});

export default RolodexView;
