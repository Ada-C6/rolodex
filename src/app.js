import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Rolodex from 'app/collections/rolodex';
import ApplicationView from 'app/views/application_view';

var contactData = [
  {
    name: 'Jane',
    phone: '123-4567',
    email: 'Janedoe2@gmail.com'
  },
  {
    name: 'John',
    phone: '369-2468',
    email: 'Johndoe@gmail.com'
  }
];

$(document).ready(function() {
  // var application = new Application(contactData);
  var rolodex = new Rolodex(contactData);
  var application = new ApplicationView({
    el: $('#application'),
    model: rolodex
  });
  application.render();
});
