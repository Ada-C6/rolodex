import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

const RolodexView = Backbone.View.extend({
  initialize: function(options){

    // keep track of the contact cards
    this.cardList = [];

    // Compile a template to be shared between the individual tasks
    this.contactCardTemplate = _.template($('#tmpl-contact-card').html());

    // this is the element that we're in charge of:
    this.contactListElement = $('#contact-cards');

    // Create a card for each contact in our data set:
    this.model.forEach(function(rawContact) {
      this.addContact(rawContact);
    }, this);

  },

  render: function(){
    // make sure my list is empty to start with
    this.contactListElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Cause the task to render
      card.render();

      // Add that HTML to our task list
      this.contactListElement.append(card.$el);
    }, this);

    // Enable chained calls
    return this;
  },

  addContact: function(contact){
    var card = new ContactView({
      model: contact,
      template: this.contactCardTemplate
    });

    this. cardList.push(card);
  },

  createContact: function(){

  },


});

export default RolodexView;
