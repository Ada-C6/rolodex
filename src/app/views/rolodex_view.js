// This view handles logic for the rolodex collection (collection of contacts)
//similar to task-list-view
import $ from 'jquery';
import ContactView from 'app/views/contact_view';
import _ from 'underscore';
import Backbone from 'backbone';

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

    // Process each task
    options.contactData.forEach(function(rawContact) {
      this.addTask(rawContact);
    }, this); // bind `this` so it's available inside forEach

    //when model is added to collection, it will create a card and add it to the list of cards
    // this.listenTo(this.model, 'add', this.addTask);
    //when model updates, re-render list of cards
    // this.listenTo(this.model, 'update', this.render);

    // this.listenTo(this.model, 'remove', this.removeTask);
  }, //end initialize

  render: function() {
   // Make sure the list in the DOM is empty
   // before we start appending items
   this.listElement.empty();

   // Loop through the data assigned to this view
   this.cardList.forEach(function(card) {
     // Cause the task to render
     card.render();

     // Add that HTML to our task list
     this.listElement.append(card.$el);
   }, this);

   return this; // enable chained calls
 },

 // Turn a raw contact into a Contact model, add it to our list of contacts,
  //  create a card for it, and add that card to our list of cards.
  addTask: function(rawContact) {
    // Create a Task from this raw data
    var contact = new Contact(rawContact);

    // Add the new contact model to our list
    this.modelList.push(contact);

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
