import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


const ApplicationView = Backbone.View.extend({
  initialize: function(options) {

  }, // end initialize function

  render: function() {

  }, // end render function



  ////////////// ADDING NEW CONTACT //////////////
  events: {
    'submit .new-task': 'createTask',   // "We're intercepting a form submit event"
    'click .clear-button': 'clearInput'
  },

  createTask: function(event) {
    console.log('createTask called');
    // Suppress that behavior.
    event.preventDefault();

    // Get the input data from the form and turn it into a task
    var task = this.getInput();


    // Add the new task to our list of tasks
    ////////////// ADDING MODEL //////////////
    ////// Commented this out and... ////////
    // this.taskData.push(task);
    //
    // // Create a card for the new task, and add it to our card list
    // var card = new TaskView({
    //   task: task,
    //   template: this.taskTemplate
    // });
    // this.cardList.push(card);
    ////////////// ADDING MODEL //////////////
    //////////// added this ... //////////////

    ////////////// ADDING MODEL //////////////

    // this.addTask(task); // THis is unnecessary b/c we listenTo this.model "add"s
    this.model.add(task);
    ////////////// //////////////

    // Re-render the whole list, now including the new card
    // this.render(); // THis is unnecessary b/c we listenTo this.model "update"s

    // Clear the input form so the user can add another task
    this.clearInput();
  },

  clearInput: function(event) {
    console.log("clearInput called");
    this.input.title.val('');
    this.input.description.val('');

  },

  // Build a task from the data entered in the .new-task form
  getInput: function() {
    var task = {
      title: this.input.title.val(),
      description: this.input.description.val()
    };
    return task;
  },


  ////////////// ADDING MODEL //////////////
  addTask: function(task) { // changed to task from rawTask when adding COLLECTIONS
    // var task = new Task(rawTask);
    // this.modelList.push(task);
    var card = new TaskView({
      model: task,
      template: this.taskTemplate
    });
    this.cardList.push(card);
  },
  //////////////////////////////////////////


});

export default ApplicationView;
