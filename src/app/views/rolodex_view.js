// This view handles logic for the rolodex collection (collection of contacts)
//similar to task-list-view
import $ from 'jquery';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import _ from 'underscore';
import Backbone from 'backbone';

//building RolodexView with the options passed in app (includes el and Data)
const RolodexView = Backbone.View.extend({
  initialize: function(options) {
    console.log("Inside RolodexView::::::" + JSON.stringify(options));
    console.log("Inside rolodex");
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element in the main section of index.html. Sames as saying this.el
    // this.listElement = this.$el;
    this.listElement = this.$('#contact-cards');

    this.cardList = [];
    // console.log("THESE ARE THE OPTIONS" + options);
    //   console.log("This is this" + this);
    //   console.log(">>> This is this.model:  " + this.model);
    this.model.forEach(function(rawContact) {
      console.log("happening in this.model.forEach, adding card for: " +rawContact.attributes.name);
      this.addContact(rawContact);
    }, this); // bind `this` so it's available inside forEach

    //when model is added to collection, it will create a card and add it to the list of cards
    // this.listenTo(this.model, 'add', this.addContact);
    //when model updates, re-render list of cards
    // this.listenTo(this.model, 'update', this.render);

    // this.listenTo(this.model, 'remove', this.removeTask);
  }, //end initialize

  render: function() {
   // Make sure the list in the DOM is empty before we start appending items
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
  addContact: function(contact) {

    var card = new ContactView({
      // model: rawContact,
      model: contact,
      template: this.contactTemplate
    });

    // Add the card to our card list
    this.cardList.push(card);
  },
});

export default RolodexView;
