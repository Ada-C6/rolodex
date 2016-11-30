import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

var contactData = [
  {
    name: 'Molly',
    email: 'kj@gmail.com',
    phone: 6178884444
  }
];

$(document).ready(function() {

  var contact = new Contact(contactData[0]);

  var contactView = new ContactView({
    el: '#contact-cards',
    // Question: Is this the name of the model contact or the variable defined above?
    model: contact
  });

  contactView.render();

  // var appView = new ApplicationView({
  //   el: '#application',
  //   model: application
  // });
});
