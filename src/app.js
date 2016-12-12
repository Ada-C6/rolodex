import $ from 'jquery';
import _ from 'underscore';
import backbone from 'backbone';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'charles',
    phone: '206-111-2222',
    email: "charles@gmail.com"
  }, {
    name: 'kari',
    phone: '206-111-2222',
    email: "kari@gmail.com"
  }, {
    name: 'dan',
    phone: '206-111-2222',
    email: "dan@gmail.com"
  }
];

$(document).ready(function() {
  var contactList = new Rolodex(contactData);
  var options = {
    el: $('#application'),
    model: contactList
  };
  var application = new RolodexView(options);
  application.render();
});
