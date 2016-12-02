import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // this.$el is now $('main')

    // Keep track of the subelements
    this.listElement = this.$('#contact-cards');
    this.modalElement = this.$('#contact-details');

    // Generate & Track Contact Cards (list view)
    this.contactCards = [];
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    this.model.forEach(function(contact) { // model is the Collection of Contacts
      this.addContactCard(contact);
    }, this);

    // Generate new card for updated/new contacts, re-render view
    this.listenTo(this.model, 'add', this.addContactCard);
    this.listenTo(this.model, 'update', this.render);

    // Keep track of modal element/template
    this.modalSection = this.$('#contact-details');
    this.modalTemplate = _.template($('#tmpl-contact-details').html());


    // Listen for clicks on modal area & non-modal area. Show/hide depending.
    // this.listenTo(this.modalSection, 'click', );
    this.listenTo(this, 'main:click', this.hideModal);
  },

  render: function() {
    this.modalSection.hide();
    this.listElement.empty();

    this.contactCards.forEach(function(card) {
      card.render();

      this.listElement.append(card.$el);
    }, this);

    return this;
  },

  events: {
    'click': 'mainClick'
  },

  addContactCard: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    // Listen for any clicks on this card
    this.listenTo(card, 'contact:click', this.showModal);

    this.contactCards.push(card);
  },

  showModal: function(contact) {
    console.log('This will SHOW MODAL >--------<');
    console.log(contact);

    var html = this.modalTemplate({
      name: contact.name,
      email: contact.email,
      phone: contact.phone
    });

    this.modalElement.html(html);

    this.modalElement.show();

    return this;
  },

  mainClick: function(event) {
    console.log("main click!!!");
    this.trigger('main:click');
  },

  hideModal: function(event) {
    console.log("Modal should go away now...");
    this.modalElement.hide();
  }
});

export default RolodexView;
