import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import $ from 'jquery';

var contactData = [
  {
    name: 'Kapi-san',
    email: 'kapi@bara.com',
    phone: 2
  }

];


var application = new Application(contactData);

var appView = new ApplicationView({
  el: '#application',
  model: application
});

$(document).ready(function(){
  var cont = new Contact(contactData[0]);
  var contView = new ContactView({
    el: $('#contact-cards'),
    model: cont
  });
  contView.render();
});
