// initially a copy of contact_view.js
import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

//
// // const ContactView = Backbone.View.extend({
// // });
var ContactListView = Backbone.View.extend({
  initialize: function(options) {
  this.template = _.template($('#tmpl-contact-card').html());
  console.log('What is this at the moment? ' + this);
  console.log('What is options.contacts at the moment? ' + options.contacts);
  console.log('What is this.model at the moment? ' + this.model);
  this.modelList = [];
  this.cardList = [];

  options.contacts.forEach(function(rawData) {
    this.addContact(rawData);
  }, this);

  this.listenTo(options.contacts, 'saving', this.render);
  this.listenTo(options.contacts, 'saving', console.log('THIS?'));


//
    // this.listenTo(this.model, 'change', this.render);
  },
//
  render: function() {
    // this.listElement.empty();

    // Loop through the data assigned to this view
    this.cardList.forEach(function(card) {
      // Cause the task to render
      card.render();

      // WANT TO SEE IF THIS WILL LISTEN TO CONTACT VIEW CHANGES
      this.listenTo(this.contacts, 'saving', this.createContact);

      // Add that HTML to our task list
      this.$el.append(card.$el);
    }, this);


    return this;
  },
  addContact: function(rawData) {
    // Create a Task from this raw data
    var contact = new Contact(rawData);

    // Add the new task model to our list
    this.modelList.push(contact);

    // Create a card for the new task
    var card = new ContactView({
      model: contact,
      template: this.template
    });

    // Add the card to our card list
    this.cardList.push(card);
  },

  createContact: function(event) {
      event.preventDefault();
      // console.log();
      console.log('Time to create a new contact');
// THIS IS A COPY FROM TASKS
      // // Get the input data from the form and turn it into a task
      // var rawData = this.getInput();
      //
      // this.addTask(rawTask);
      //
      // // Re-render the whole list, now including the new card
      // this.render();
      //
      // // Clear the input form so the user can add another task
      // this.clearInput();
    }

});
//
export default ContactListView;
