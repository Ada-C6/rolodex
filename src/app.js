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

// Start by hiding the contact details!
console.log("00. I am hiding the modal");
$('#contact-details').hide();


// Once the document is ready
$(document).ready(function(){
  console.log("05. The document is ready");

  // Create a new Rolodex from the static contactList defined above
  var someContacts = new Rolodex(contactList);
  console.log("10. The new Rolodex is ready. Here are the contents:");
  console.log(someContacts);

  var contactCardTemplate = _.template($('#tmpl-contact-card').html());

  var roloView = new RolodexView({
    el: $('#application'),
    contacts: someContacts,
    cardTemplate: contactCardTemplate
  });

  console.log("20. The RolodexView is about to be rendered by the document ready function");
  roloView.render();
});







// This was provided to me when I opened the original files:
// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
