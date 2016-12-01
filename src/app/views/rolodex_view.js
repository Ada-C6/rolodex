import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // this.$el is $('#contact-cards'), the main > ul

    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    this.contactCards = [];

    this.model.forEach(function(contact) { // model is the Collection of Contacts
      this.addContactCard(contact);
    }, this);
  },

  render: function() {
    this.$el.empty();

    this.contactCards.forEach(function(card) {
      card.render();

      this.$el.append(card.$el);
    }, this);

    return this;
  },

  addContactCard: function(contact) {
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });

    this.contactCards.push(card);
  }
});

export default RolodexView;
