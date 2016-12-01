import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    this.listElement = this.$('#contact-cards');

    this.cardList = [];

    // model here is a collection of Contact models, which was instantiated in app.js: var contactList = new Rolodex(contactData);
    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this);
  },

  addContact: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.cardList.push(card);
  },

  render: function() {
    this.listElement.empty();

    this.cardList.forEach(function(card) {
      card.render();
      this.listElement.append(card.$el);
    }, this);

    return this;
  },

  events: {
    // 'click .btn-save' : 'createContact',
    'click .btn-cancel' : 'clearInput'
  },
  //
  clearInput: function(event) {
    console.log("clearInput called");
    this.$('input')[0].value = '';
    this.$('input')[1].value = '';
    this.$('input')[2].value = '';
    // var contactForm = this.$('input');
    // var contactInput = contactForm.$('<input>');
    // console.log(contactForm);
    // contactForm[0].input.value = '';
  //   this.$('.contact-form').label.input.phone.val('');
  //   this.$('.contact-form').label.input.email.val('');
  },
});

export default RolodexView;
