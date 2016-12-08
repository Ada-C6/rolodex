import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    this.listElement = this.$('#contact-cards');

    this.contactList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      phone: this.$('.contact-form input[name="phone"]'),
      email: this.$('.contact-form input[name="email"]')
    };

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.render);
  },

  render: function() {
    this.listElement.empty();


    this.contactList.forEach(function(contact) {
      contact.render();
      this.listElement.append(contact.$el);
    }, this);

    return this;
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput',
    'click body': 'hideContact',
    'click #contact-details': (e) => { e.stopPropagation() }
  },

  hideContact: function() {
      event.stopPropagation();
    $('#contact-details').hide();
  },

  createContact: function(event) {
    event.preventDefault();
    console.log("in createContact");

    var rawContact = this.getInput();

    this.model.add(rawContact);

    this.clearInput();
  },

  getInput: function() {
    console.log("in getInput");
    var contact = {
      name: this.input.name.val(),
      phone: this.input.phone.val(),
      email: this.input.email.val()
    };
    return contact;
  },

  clearInput: function(event) {
    console.log("in clearInput");
    this.input.name.val('');
    this.input.phone.val('');
    this.input.email.val('');
  },

  addContact: function(contact) {
    console.log("in addContact");
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.contactList.push(card);
  },


});

export default RolodexView;
