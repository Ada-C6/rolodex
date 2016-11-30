import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import $ from 'jquery';

var hardCodedContacts = [{
  name: "christian",
  email: "christian@christian.com",
  phone: "6126550000"
},
{
  name: "lauren",
  email: "lauren@cat.com",
  phone: "6126550000"
},
{
  name: "ediff",
  email: "dummy@cat.com",
  phone: "dfikdsjfs;df"
}
];

$(document).ready(function(){

// for each hard-coded contact, make them a new contact. use the #contact-cards element, and the model that belongs to the hard-coded contact element.
for (var i = 0; i < hardCodedContacts.length; i++) {
  var contact = new Contact(hardCodedContacts[i]);
  var contactView = new ContactView({
    el: '#contact-cards',
    model: contact
  });
}

})
