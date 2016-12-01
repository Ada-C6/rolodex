import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';

// I need to comment out these 2 lines later when I separate Model and View to their correct files.
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';


// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

var contactData = [
  {
    name: "Kelly Tran",
    phone: "432 432 5433",
    email: "sing@song.net"
  }, {
    name: "Baby Bear",
    phone: "123 456 7890",
    email: "bear@bearland.net"
  }, {
    name: "Happy Baloon",
    phone: "987 654 3210",
    email: "baloon@baloon.com"
  }
];

$(document).ready(function() {

  var contactList = new Rolodex(contactData);
  var options = {
    el: $('#application'), // pointing to the entire app and will call the #contact-cards inside the application
    model: contactList
  };

  var application = new RolodexView(options);
  application.render();
});


// Wed 11:22AM: I can create an array of contact hashes. every time i iterate thru each hash, i will instantiate a Contact model object and a ContactView model object, in order to achieve a view of multiple contact cards. Note: a list of model objects can be make a COLLECTION of model objects!
