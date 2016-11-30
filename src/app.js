import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Ellen Ochoa',
    phoneNumber: '555-555-5555',
    email: 'awesomeastrosauce@nasa.gov'
  },
];

$(document).ready(function() {
  var application = new Application(contactData);

  var appView = new ApplicationView({
    el: $('#application'),
    model: application
  });
  appView.render();
});
