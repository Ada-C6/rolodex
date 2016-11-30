import $ from 'jquery';

import ContactView from 'app/views/contact_view';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';

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
    el: $('#application'),
    model: rolodex
  };
  var application = new RolodexView(options);
  application.render();
});



// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
