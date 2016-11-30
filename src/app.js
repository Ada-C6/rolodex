import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import $ from 'jquery';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Kapi-san',
    email: 'kapi@bara.com',
    phone: '222-222-2222'
  },
  {
    name: "Charles",
    email: 'charlesincharge@ada.com',
    phone: '333-333-3333'
  },
  {
    name: "Margaret",
    email: "IGotYouToTheMoon",
    phone: '444-444-4444'
  },
  {
    name: "Brendan",
    email: "bman@bman.com",
    phone: '555-555-5555'
  },
  {
    name: "Picard",
    email: "makeitso@enterprise.com",
    phone: '666-666-6666'
  }

];


var application = new Application(contactData);

var appView = new ApplicationView({
  el: '#application',
  model: application
});

$(document).ready(function(){
  $('#contact-details').hide();
  var contactList = new Rolodex(contactData);
  var contView = new RolodexView({
    el: $('#application'),
    model: contactList
  });
  contView.render();
});
