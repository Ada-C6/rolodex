import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

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
  },
  {
    name: 'Mochi',
    phoneNumber: 7922222,
    email: 'mochi@example.com'
  }];

$(document).ready(function() {
  var contactList = new Rolodex(contactData);
  // console.log(contact.attributes.name);
  var rolodexView = new RolodexView({
    el: '#contact-cards',
    model: contactList
  });

  var application = new Application();

  var appView = new ApplicationView({
    el: '#application',
    model: application
  });

  // appView.render();
  rolodexView.render();
});
