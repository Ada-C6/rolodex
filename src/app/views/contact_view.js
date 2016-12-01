import Backbone from 'backbone';
import Contact from 'app/models/contact';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // Store a the full list of tasks
    this.contactData = options.contactData;

    // Compile a template to be shared between the individual tasks
    this.contactTemplate = _.template($('#tmpl-contact-card').html());

    // Keep track of the <ul> element
    this.listElement = this.$('#contact-list');

    this.contactModel = options.model;

    // Create a TaskView for each task
    this.cardList = [];
    // this.taskData.forEach(function(task) {
    //   var card = new TaskView({
    //     task: task,
    //     template: this.taskTemplate
    //   });
    //   this.cardList.push(card);
    // }, this); // bind `this` so it's available inside forEach
    //
    // this.input = {
    //   title: this.$('.new-task input[name="title"]'),
    //   description: this.$('.new-task input[name="description"]')
    // };
  },

  render: function() {
    this.$el.html(this.contactTemplate(this.contactModel.attributes));
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
    var card = new RolodexView({
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

export default ContactView;
