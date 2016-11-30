import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Joaquin Phoenix',
    phone: 1234,
    email: 'joaquin.phoenix@catmail.com'
  }, {
    name: 'Valentino Gallardo',
    phone: 2345,
    email: 'valentino.gallardo@catmail.com'
  }, {
    name: 'Jacob Buendia',
    phone: 4567,
    email: 'jacob.buendia@catmail.com'
  }
];


$(document).ready(function() {
  // var application = new Application();
  //
  // var appView = new ApplicationView({
  //   el: '#application',
  //   model: application
  // });

  var contact = new Rolodex(contactData);
  var options = {
    el: $('#contact-cards'),
    model: contact
  };
  var rolodex = new RolodexView(options);
    rolodex.render();
});
