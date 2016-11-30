import $ from 'jquery';


import Application from 'app/models/application';
import Contact from 'app/models/contact';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';


$(document).ready(function() {
  var singleContact = new Contact({
    name: "Josh",
    email: "jlp@test.com",
    phoneNumber: "123-456-1234"
  });

  var singleContactView = new ContactView({
    model: singleContact,
    el: $('#contact-cards')
  });

  singleContactView.render();
});

// var defaultContacts = [
//   {
//   name: "Josh",
//   email: "jlp@test.com",
//   phoneNumber: "123-456-7890"
// }
// ];

// var singleContact = new Contact({
//   name: defaultContacts[0].name,
//   email: defaultContacts[0].email,
//   phoneNumber: defaultContacts[0].phoneNumber
// });
//
// var application = new Application(
//
// );

// var appView = new ApplicationView({
//   el: '#application',
//   model: contact;
// });
