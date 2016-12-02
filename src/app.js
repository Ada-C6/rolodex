// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';
import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

var contactData = [
  {
    name: 'Human',
    phone: '00000000',
    email: 'Email@Address.com'
  },
  {
    name: 'Human2',
    phone: '00000000',
    email: 'Email@Address.com'
  },
  {
    name: 'Human3',
    phone: '00000000',
    email: 'Email@Address.com'
  }
];


$(document).ready(function() {
  var contactList = new Rolodex(contactData);

  var application = new RolodexView({
    el: $('body'),
    model: contactList
  });

  application.render();
});
