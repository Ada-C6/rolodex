import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

var contactList = [
  {
    name: "Jenny",
    email: "jenny@tutone.com",
    phone: "867-5309"
  }, {
    name: "Jessica Rabbit",
    email: "jrabbit@toontown.com",
    phone: "555-0123"
  }, {
    name: "Elmer Fudd",
    email: "killdawabbit@hunter.com",
    phone: "KLondike 6-5000"
  }, {
    name: "Lisa Simpson",
    email: "saxophone.nerd@sprinfield.com",
    phone: "555-0420"
  }
];

$(document).ready(function() {
  var contactTemplate = _.template($('#tmpl-contact-card').html());
  var listElement = $("#contact-cards");
  var exampleContact = new Contact(contactList[0]);

  //  var cardList = [];
  var contactInfo = new ContactView({
    contact: exampleContact,
    template: contactTemplate
  });

  listElement.append(contactInfo.render().$el);
});


// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
