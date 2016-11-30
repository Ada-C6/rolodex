import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Application from 'app/models/application';
import Contact from 'app/models/contact';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';

var contactData = [
  {
    name: 'Jane',
    phone: '123-4567',
    email: 'Janedoe2@gmail.com'
  }
];

$(document).ready(function() {
  var contact = new Contact(contactData[0]);
  var contactTemplate = _.template($('#tmpl-contact-details').html());
  // var application = new Application(contactData);

  var contactView = new ContactView({
    el: $('#contact-details'),
    model: contact,
    template: contactTemplate
  });

  contactView.render();
});
