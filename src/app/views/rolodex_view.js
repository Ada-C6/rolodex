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
});

export default RolodexView;
