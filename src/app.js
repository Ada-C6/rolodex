import Backbone from 'backbone';
import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

var contactData = [{
  name: "Yasmin",
  phone: "555-5555",
  email: "you_wish@gmail.com"
}];

var application = new Application();

var appView = new ApplicationView({
  el: $('#application'),
  model : application
});


$(document).ready(function() {
  var contct = new Contact(contactData[0]);
  var contctView = new ContactView({
    el: ("#contact-cards"),
    model: contct
  });
  contctView.render();
});
