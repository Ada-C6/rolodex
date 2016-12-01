// this is the view of the entire rolodex with all of the Contacts
import $ from 'jquery';
import Backbone from 'backbone';
import ContactView from 'app/views/contact_view';
import _ from 'underscore';
import Contact from 'app/models/contact';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate =  _.template($('#tmpl-contact-card').html());

    this.data = options.data;

    // the <ul> element that the contact cards will live within
    this.listElement = this.$('#contact-cards');

    // this.model.forEach(function(rawContact) {
    //   this.addContact(rawContact);
    // }, this);
    // // a list of contact views
    this.cardList = [];
    this.data.forEach(function(contact) {
      var card = new ContactView({
        contact: contact,
        template: this.contactTemplate,
        model: contact
      });

      this.cardList.push(card);
    }, this);
  },

  render: function() {
    //clear the list in the DOM
    this.listElement.empty();

    //Loop through the card list
    this.cardList.forEach(function(card) {
      card.render();

      //append
      this.listElement.append(card.$el);
    }, this);

    return this; //enable chained calls
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
