import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // Compile a template to be shared between the individual tasks
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    // We'll keep track of a list of task models and a list
    // of task views.
    this.modelList = [];
    this.cardList = [];

    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this);

    // Process each task
    // options.contactData.forEach(function(contact) {
    //   this.addContact(contact);
    // }, this); // bind `this` so it's available inside forEach

    // Keep track of our form input fields
    // this.input = {
    //   title: this.$('.new-task input[name="title"]'),
    //   description: this.$('.new-task input[name="description"]')
    // };
  }, // END OF INITIALIZE FUNCTION

  addTask: function(contact) {

  // Create a card for the new task
  var card = new ContactView({
    model: contact,
    template: this.contactTemplate
  });

  // Add the card to our card list
  this.cardList.push(card);
},

});

export default RolodexView;
