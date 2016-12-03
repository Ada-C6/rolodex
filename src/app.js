import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';


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
    name: "Lala Girl",
    email: "sing@song.net",
    phone: "432 432 5433"
  }, {
    name: "Baby Bear",
    email: "bear@bearland.net",
    phone: "123 456 7890"
  }, {
    name: "Happy Baloon",
    email: "baloon@baloon.com",
    phone: "987 654 3210"
  }, {
    name: "Sleepy Baby",
    email: "sleepybear@baby.com",
    phone: "321 545 4324"
  }, {
    name: "Wild Child",
    email: "wildchild@child.com",
    phone: "940 434 9212"
  }, {
    name: "Skeptical Cat",
    email: "skepcat@cat.com",
    phone: "904 654 3232"
  }
];

// var contactList;

$(document).ready(function() {
  $('#contact-details').hide(); // hide the contact-details when we haven't clicked on a contact-cards
  var contactList = new Rolodex(contactData);
  var options = {
    el: $('body'), // pointing to the entire app and will call the #contact-cards inside the application
    model: contactList
  };

  var application = new RolodexView(options);
  application.render();
});

// var addContact = function(contact) {
//   contactList.add(contact);
// };


// Wed 11:22AM: I can create an array of contact hashes. every time i iterate thru each hash, i will instantiate a Contact model object and a ContactView model object, in order to achieve a view of multiple contact cards. Note: a list of model objects can be make a COLLECTION of model objects!
