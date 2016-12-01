// This view handles logic for the rolodex collection (collection of contacts)
//similar to task-list-view
import $ from 'jquery';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import _ from 'underscore';
import Backbone from 'backbone';

const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    // Compile a template to be shared between the individual tasks
    console.log(options);
    console.log("Inside rolodex");
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    // We'll keep track of a list of task models and a list
    // of task views.
    // this.modelList = [];
    this.cardList = [];
    console.log("THESE ARE THE OPTIONS" +options);
      console.log("This is this" + this);
    // Process each task
    this.model.forEach(function(rawContact) {
      console.log(rawContact.name);
      this.addContact(rawContact);
    }, this); // bind `this` so it's available inside forEach

    //when model is added to collection, it will create a card and add it to the list of cards
    // this.listenTo(this.model, 'add', this.addContact);
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

 // Turn a raw contact into a Contact model, add it to our list of contacts
  addContact: function(rawContact) {

    var card = new ContactView({
      model: rawContact,
      template: this.contactTemplate
    });

    // Add the card to our card list
    this.cardList.push(card);
  },
});

export default RolodexView;
