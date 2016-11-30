import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Jo',
    phone: '555-5555',
    email: 'j@me.com'
  },
  {
    name: 'Pat',
    phone: '555-5555',
    email: 'p@me.com'
  },
  {
    name: 'Sam',
    phone: '555-5555',
    email: 's@me.com'
  }
];

$(document).ready(function() {
  var application = new Application();
  var appView = new ApplicationView({
    el: '#application',
    model: application
  });
  appView.render();
  // console.log(appView.$el);

  var rolodex = new Rolodex(contactData);
  // console.log(rolodex.models[0].attributes.name);
  var roloView = new RolodexView({
    el: 'main',
    model: rolodex
  });
  roloView.render();
  // console.log(roloView.$el);
});
