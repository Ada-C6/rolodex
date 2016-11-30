import $ from 'jquery';

import Application from 'app/models/application';
import Rolodex from 'app/collections/rolodex';

import ApplicationView from 'app/views/application_view';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';


var contactData = [
  {
    name: 'Nicole',
    email: 'nicole@ada.com',
    phone: '555-555-5555'
  }, {
    name: 'ShariSafari',
    email: 'safarishari@ada.com',
    phone: '444-444-4444'
  }, {
    name: 'Diane',
    email: 'diane@ada.com',
    phone: '333-333-3333'
  }, {
    name: 'MargarineMary',
    email: 'margarinemary@ada.com',
    phone: '222-222-2222'
  }
];
//
// var singleContact = {
//   name: 'Sammy',
//   email: 'margarinemary@ada.com',
//   phone: '222-222-2222'
// };

$(document).ready(function() {
  var rolodex = new Rolodex(contactData);
  var contactOptions = {
    el: '#application',
    model: rolodex
  };

  var rolodexView = new RolodexView(contactOptions);
  rolodexView.render();

  var application = new Application();
  var options = {
    el: '#application',
    model: application
  };

  var appView = new ApplicationView(options);
  appView.render();

  console.log("i just completed document.ready in app.js");
});
