import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

var contactData = [
  {
    name: 'Freddie',
    phoneNumber: 123456,
    email: 'fred@msn.com'
  },
  {
    name: 'Shadow',
    phoneNumber: 5555555,
    email: 'shadow@example.com'
  }];

$(document).ready(function() {
  var contact = new Contact(contactData);
  // console.log(contact.attributes.name);
  var contactView = new ContactView({
    el: '#contact-cards',
    model: contact
  });

  var application = new Application();

  var appView = new ApplicationView({
    el: '#application',
    model: application
  });

  contactView.render();
});
