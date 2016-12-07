import Backbone from 'backbone';
import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: "Yasmin",
    phone: "555-5555",
    email: "you_wish@gmail.com"
  }, {
    name: "Erin",
    phone: "777-7777",
    email: "oshkosh@yahoo.com"
  }
];

var application = new Application();

var appView = new ApplicationView({
  el: $('#application'),
  model : application
});


$(document).ready(function() {
  var contactList = new Rolodex(contactData);
  var contactListView = new RolodexView({
    el: ("#application"),
    model: contactList
  });
  contactListView.render();
});
