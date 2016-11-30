import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';



var contact = new Contact({
    name: 'Rudolph',
    email: 'SantasNumber1@northpole.com',
    phoneNumber: '206-RED-NOSE'
  });

$(document).ready(function() {
  var contactTemplate = _.template($('#tmpl-contact-card').html());
  var contactListElement = $('#contact-cards');
  // var cardList = [];

  // contactData.forEach(function(contact) {
    var card = new ContactView({
      contact: contact,
      template: contactTemplate
    });
    // cardList.push(card);
    console.log($('#tmpl-contact-card'));
    console.log($('#tmpl-contact-card').html());

    contactListElement.append(card.render().$el);
  // });

// $(document).ready(function() {
//   var contactTemplate = _.template($('#tmpl-contact-card').html());
//   var taskListElement = $('.task-list');
//   var cardList = [];
//   taskData.forEach(function(task) {
//       var card = new TaskView({
//         task: task,
//         template: taskTemplate
//       });
//       cardList.push(card);
//       taskListElement.append(card.render().$el);
//   });
});
