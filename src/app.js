import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';

var contactsData = [
  {
    name: "Pancho Perez",
    email: "ju kidin me? we no got no fones!",
    phone: "dos latas y un cordel"
  },
  {
    name: "Juanita Sanchez",
    email: "pero y este que se piensa?",
    phone: "guan-tu...que dice?"
  },
  {
    name: "Perequita Pita",
    email: "hay que encenderle una velita a San Lazaro",
    phone: "oigo???"
  }
];


$(document).ready(function() {
  var rolodex = new Rolodex(contactsData);
  var application = new RolodexView({
    el: $('#application'),
    model: rolodex//contactsData: contactsData
  });
  application.render();
});

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
