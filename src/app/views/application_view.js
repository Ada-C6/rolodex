import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const ApplicationView = Backbone.View.extend({
  initialize: function(options) {
    // Compile a template to be shared between the individual tasks
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');
    // Create a ContactView for each contact
    this.cardList = [];

    // console.log(this.model);

    this.model.forEach(function(contact) {
        ////// Commented this out when we added the model
        // console.log(contact);

        var card = new ContactView({
          contact: contact,
          template: this.contactTemplate
        });
        this.cardList.push(card);

       ////////////// ADDING MODEL //////////////
      //  this.addTask(task);
    }, this); // bind `this` so it's available inside forEach  * i.e. "this" is another argument being passed into the forEach so it knows which "this" to use



    this.render();
  },

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
 //////////////////////////////////////////
  }, // end render function

});

export default ApplicationView;
