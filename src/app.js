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

// Create a few first contact from the Contact model
var firstContact = new Contact ({
  name: "Olivia",
  phone: "1234567890",
  email: "justin@bieber.com"
});

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


// This should fire after the document is ready:
$(document).ready(function(){
  console.log("The document is ready");
  var someContacts = new Rolodex(contactList);
  var contactCardTemplate = _.template($('#tmpl-contact-card').html());


  console.log("The Rolodex has been created");
  console.log(someContacts);

  var roloView = new RolodexView({
    el: $('#application'),
    contacts: someContacts,
    template: contactCardTemplate
  });

  console.log("The application is about to be rendered");
  roloView.render();
});







// This was provided to me when I opened the original files:
// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
