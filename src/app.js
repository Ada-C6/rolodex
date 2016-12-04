import $ from 'jquery';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';
import ApplicationView from 'app/views/application_view';
import Application from 'app/models/application';

var contactData = [
  {
    name: 'Ada',
    email: 'Ada@lovelace.com',
    phone: '555-5555'
  }, {
    name: 'Grace Hopper',
    email: 'Grace@hopper.com',
    phone: '201-5555'
  }, {
    name: 'Charlotte',
    email: 'Charlotte@theweb.com',
    phone: '123-4567'
  }
];


$(document).ready(function() {
  var rolodex = new Rolodex(contactData);
  var options = {
    // Need to be #application so that input fields are available to rolodex and contact
    el: $('#application'),
    model: rolodex
  };
  var rolodexView = new RolodexView(options);
  rolodexView.render();

});


var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});
