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

    this.listenTo(this.model, 'add', this.addContact);
    this.listenTo(this.model, 'update', this.render);
    this.render();
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

    this.listenTo(card, 'display', this.displayDetails);
    this.cardList.push(card);
  },

  displayDetails: function(card) {
    // console.log("in displayDetails, clicked on: " + card.model.get('name'));
    var detailsTemplate = _.template($('#tmpl-contact-details').html());
    var detailsDiv = $('#contact-details');
    var html = detailsTemplate({
      name: card.model.get('name'),
      email: card.model.get('email'),
      phone: card.model.get('phone')});
    detailsDiv.html(html);
    detailsDiv.removeClass("hide-item");
  }
});

export default RolodexView;
