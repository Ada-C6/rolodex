import _ from 'underscore';
import $ from 'jquery';

import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    this.listElement = $("#contact-cards");
    this.cardList = [];
    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this);
  },
  render: function() {
    this.listElement.empty();
    this.cardList.forEach(function(card) {
      card.render();
      this.listElement.append(card.$el);
    }, this);
    return this;
  },

  addContact: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.cardList.push(card);
  }
});

export default RolodexView;
