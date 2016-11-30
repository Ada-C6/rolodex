import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const RolodexView = Backbone.View.extend({
  initialize: function(options) {
      // Compile a template to be shared between the individual tasks
      this.contactTemplate = _.template($('#tmpl-contact-card').html());
      // Keep track of the <ul> element
      this.listElement = this.$('#contact-cards');
      // Create a ContactView for each contact
      this.cardList = [];

      this.model.forEach(function(contact) {
        // call contactView on each contact in the collection
        this.addContact(contact);
      }, this); // bind `this` so it's available inside forEach  * i.e. "this" is another argument being passed into the forEach so it knows which "this" to use


      // Re-render the whole rolodex whenever it is updated
      this.listenTo(this.model, "update", this.render);
      // Add the contacts whenever the model has been added to
      this.listenTo(this.model, "add", this.addContact); // --> THis is required for the newly added contact to render, so the model must not get "updated" until that happens?


      // this.render();

    }, // end initialize function

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

  ////////////// ADDING MODEL //////////////
  addContact: function(contact) {
    // var task = new Task(rawTask);
    // this.modelList.push(task);
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.cardList.push(card);

  },
});

export default RolodexView;
