import $ from 'jquery';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

var exampleContacts = [
  {
    name: 'Maya', email: 'maya@example.com', phone: "123-456-7890"
  },
];

/*
var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});
*/

$(document).ready(function() {
  var contact = new Contact(exampleContacts[0]);
  var application = new ContactView({
    el: $('#application'),
    model: contact
  });
  application.render();
});
