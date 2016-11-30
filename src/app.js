import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

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
  var myRolodex = new Rolodex(contactList);
  var rolodexDisplay = new RolodexView(
    {
      el: $("#contact-cards"),
      model: myRolodex
    });
  rolodexDisplay.render();
});


// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
