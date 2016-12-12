import $ from 'jquery';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var exampleContacts = [
  {
    name: 'Rick', email: 'rick@example.com', phone: "123-456-7890"
  },
  {
    name: 'Morty', email: 'morty@example.com', phone: "233-566-0998"
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
  var contactList = new Rolodex(exampleContacts);

  var application = new RolodexView({
    el: $('#application'),
    model: contactList
  });
  application.render();
});
