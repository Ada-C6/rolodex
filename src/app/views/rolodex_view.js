import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import ContactView from 'app/views/contact_view'

const RolodexView = Backbone.View.extend({
  initialize: function(options) {

    // Store a the full list of tasks
    this.contactData = options.contactData;

    // Compile a template to be shared between the individual tasks
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    this.contactDetailTemplate = _.template($('#tmpl-contact-details').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');

    // Create a TaskView for each task
    this.cardList = [];
    this.contactData.forEach(function(contact) {
      var card = new ContactView({
        contact: contact,
        template: this.contactTemplate
      });
      this.cardList.push(card);
    }, this); // bind `this` so it's available inside forEach

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')

    };
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
},


  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearInput'
  },

  clearInput: function(event) {
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  },

  createContact: function(event) {
    // Normally a form submission will refresh the page.
    // Suppress that behavior.
    event.preventDefault();

    // Get the input data from the form and turn it into a task
    var contact = this.getInput();

    // Add the new task to our list of tasks
    //  gotta figure out where the data is stored
   this.contactData.push(contact);

    // Create a card for the new task, and add it to our card list
    var card = new ContactView({
      contact: contact,
      template: this.contactTemplate
    });
    this.cardList.push(card);

    // Re-render the whole list, now including the new card
    this.render();

    // Clear the input form so the user can add another task
    this.clearInput();
  }, // end createTast();


  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val(),
    };
    return contact;
  }, // end getInput();
});

export default RolodexView;
