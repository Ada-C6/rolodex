import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import $ from 'jquery';

var hardCodedContact = {
  name: "christian",
  email: "christian@christian.com",
  phone: "6126550000"
};

$(document).ready(function(){

  var contact = new Contact(hardCodedContact);

  var contactView = new ContactView({
    el: '#contact-cards',
    model: contact 
  });
})


// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
