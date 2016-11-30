import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';


var contactData = [
  {
    name: 'Ellen Ochoa',
    phoneNumber: '555-555-5555',
    email: 'awesomeastronaut@nasa.gov'
  }, {
    name: 'Duy-Loan Le',
    phoneNumber: '444-444-4444',
    email: 'calculatorprime@ti.com'
  }, {
    name: 'Margaret Hamilton',
    phoneNumber: '333-333-3333',
    email: 'apolloteamleader@nasa.gov'
  }, {
    name: 'Katherine Johnson',
    phoneNumber: '222-222-2222',
    email: 'humancomputer@nasa.gov'
  }
];

$(document).ready(function() {
  var rolodex = new Rolodex(contactData);

  var appView = new RolodexView({
    el: $('#application'),
    model: rolodex
  });
  appView.render();
});
