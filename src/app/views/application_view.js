import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';
import RolodexView from 'app/views/rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    this.contactData = options.contactData;
    this.contactTemplate = _.template($('#tmpl-contact-details').html());
    this.rolodexTemplate = _.template($('#tmpl-contact-card').html());
    this.cardList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

  },

  render: function() {
    // var contactView = new ContactView({
    //   el: $('#contact-details'),
    //   model: contact,
    //   template: this.contactTemplate
    // });
    //
    // contactView.render();

    this.cardList.forEach(function(card) {
      card.render();

    }, this);

    return this;
  },

  addContact: function(contact){
    var card = new RolodexView({
      el: $('#contact-cards'),
      model: contact,
      template: this.rolodexTemplate
    });
    this.cardList.push(card);
  }
});

export default ApplicationView;
