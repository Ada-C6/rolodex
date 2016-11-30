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
  }, {
    name: 'Caroline',
    email: 'chj@gmail.com',
    phone: 6178944444
  }, {
    name: 'Dolores',
    email: 'gefd@gmail.com',
    phone: 6178355529
  }
];

// $(document).ready(function() {
  var application = new Application();

  var appView = new ApplicationView({
    el: '#application',
    model: application
  });
// });
