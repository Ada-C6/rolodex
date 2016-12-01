import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';
import RolodexView from 'app/views/rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-details').html());
    this.rolodexTemplate = _.template($('#tmpl-contact-card').html());
    this.cardList = [];
    this.modelList = [];

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    this.listenTo(this.model, "update", this.render);

    this.listenTo(this.model, "add", this.addContact);

  },

  render: function() {
    // var contactView = new ContactView({
    //   el: $('#contact-details'),
    //   model: contact,
    //   template: this.contactTemplate
    // });
    //
    // contactView.render();

    $('#contact-cards').empty();

    this.cardList.forEach(function(card) {
      card.render();

    }, this);

    return this;
  },

  events: {
    'click .btn-save': 'saveInput',
    'click .btn-cancel': 'clearInput'
  },

  clearInput: function(event) {
    $('input').val('');
  },

  saveInput: function(event) {

    event.preventDefault();

    var contact = new Contact({
      name: this.input.name.val(),
      phone: this.input.phone.val(),
      email: this.input.email.val()
    });

    this.model.add(contact);

    this.clearInput();

  },

  addContact: function(contact) {
    var card = new RolodexView({
      el: $('#contact-cards'),
      model: contact,
      template: this.rolodexTemplate
    });
    this.cardList.push(card);
  }
});

export default ApplicationView;
