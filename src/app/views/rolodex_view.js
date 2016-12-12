import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';


const RolodexView = Backbone.View.extend({

  initialize: function(options) {
    // Store a the full list of tasks
    // not needed // this.taskData = options.taskData;

    // this.modelList = []; -- not needed with collection
    // Compile a template to be shared between the individual tasks
    this.contactTemplate = _.template($('#tmpl-contact-card').html());
    // Keep track of the <ul> element
    this.listElement = this.$('#contact-cards');
    // Create a TaskView for each task
    this.cardList = [];

    // options.taskData -- instead of this.model
    this.model.forEach(function(contact) {
      this.addContact(contact);
    }, this); // bind `this` so it's available inside forEach

    this.input = {
      name: this.$('.contact-form input[name="name"]'),
      email: this.$('.contact-form input[name="email"]'),
      phone: this.$('.contact-form input[name="phone"]')
    };

    this.listenTo(this.model, "update", this.render);
    this.listenTo(this.model, "add", this.addContact);
    // this.listenTo(this.model, "remove", this.removeTask);
  },
  addContact: function(contact) {
    // var task = new Task(rawTask);
    // this.modelList.push(task);
    var card = new ContactView({
      model: contact,
      template: this.contactTemplate
    });
    this.cardList.push(card);
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

  createContact: function(event) {
    event.preventDefault();
    // Get the input data from the form and turn it into a task
    var contact = new Contact(this.getInput());
    // Add the new task to our list of tasks
    // this.addTask(task); --old
    this.model.add(contact);
    // Re-render the whole list, now including the new card
    // this.render(); -- no longer needed
    // Clear the input form so the user can add another task
    this.clearInput();
  },

  // Build a task from the data entered in the contact-form form
  getInput: function() {
    var contact = {
      name: this.input.name.val(),
      email: this.input.email.val(),
      phone: this.input.phone.val()
    };
    return contact;
  },

  clearInput: function(event) {
    this.input.name.val('');
    this.input.email.val('');
    this.input.phone.val('');
  }
});

export default RolodexView;
