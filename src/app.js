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
    phone: 2
  },
  {
    name: "Charles",
    email: 'charlesincharge@ada.com',
    phone: 3
  }

];


var application = new Application(contactData);

var appView = new ApplicationView({
  el: '#application',
  model: application
});

$(document).ready(function(){
  var contactList = new Rolodex(contactData);
  var contView = new RolodexView({
    el: $('#application'),
    model: contactList
  });
  contView.render();
});
