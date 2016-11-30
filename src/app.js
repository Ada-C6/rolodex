import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';



var hardCodedContacts = [
  { name: "Small Fry", email: "smallfry@condiments.org", phone: "303-555-1000" },
  { name: "Wee Chip", email: "weechip@condiments.org", phone: "44 7700 900104"},
  { name: "Oui Jean", email: "ouijean@condiments.org", phone: "303-555-2000" },
  { name: "Baby-Q", email: "bbq@condiments.org", phone: "n/a, too young" }
];


$(document).ready(function() {
  var application = new Application();
  var appView = new Application({
    el: '#application',
    model: application
  });

  var contactsList = new Rolodex(hardCodedContacts);
  var rolodexView = new RolodexView({
    el: '#contact-cards',
    model: contactsList
  });

  // appView.render();
  rolodexView.render();
});
