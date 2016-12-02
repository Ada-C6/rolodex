import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

// import RolodexView from 'app/views/contact_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    // Compile a template to be shared between the contacts
    // this.cardTemplate = _.template($('#tmpl-contact-card').html());
    //
    // // Keep track of the <ul> element
    // this.listElement = this.$('#contact-cards');
    //
    // this.cardList = [];
    //
    // this.model.contactList.forEach(function(contact) {
    //   this.addContact(contact);
    // }, this); // bind `this` so it's available inside forEach

   },

   render: function() {
    //  this.listElement.empty();
     //
    //  this.cardList.forEach(function(card) {
    //    card.render();
     //
    //    this.listElement.append(card.$el);
    //  }, this);

     return this;
   },

  //  addContact: function(contact) {
  //    // create a card for the contact
  //    var card = new ContactView({
  //      model: contact,
  //      template: this.contactTemplate
  //    });
   //
  //    // add the card to the card list
  //    this.cardList.push(card);
   //
  //    return this;
  //  },



});

export default ApplicationView;
