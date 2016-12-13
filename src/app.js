import $ from 'jquery';
import _ from 'underscore';

// Import the Application model and view:
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

// Import the contact model and view:
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

// Import the collections:
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';


// Create a list of new contacts to pass around
var contactList = [
  {
    name: "Leah",
    phone: "234567890",
    email: "leah@leah.com"
  },
  {
    name: "Alyssa",
    phone: "34567890",
    email: "alyssa@alyssa.com"
  },
  {
    name: "Sabrina",
    phone: "4567890",
    email: "sabrina@sabrina.com"
  },
  {
    name: "Miriam",
    phone: "567890",
    email: "miriam@miruam.com"
  },
];


// Once the document is ready
$(document).ready(function(){
  // Push the contact list data through the Rolodex model collection (which creates Contact models)
  var someContacts = new Rolodex(contactList);

  // Create a template for the contact card html
  var contactCardTemplate = _.template($('#tmpl-contact-card').html());

  // Fire up the rolodex view initializer with the following properties:
  var roloView = new RolodexView({
    el: $('body'),
    contacts: someContacts,
    cardTemplate: contactCardTemplate
  });

  // Render that bad boy
  roloView.render();
});







// This was provided to me when I opened the original files:
// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
