import $ from 'jquery';
import _ from 'underscore';
import backbone from 'backbone';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var staticData = [
  {
    name: "charles",
    phone: "555",
    email: "c@gmail.com"
  },
  {
    name: "kari",
    phone: "666",
    email: "k@gmail.com"
  }
];

$(document).ready(function() {
  var contactList = new Rolodex(staticData);
  var options = {
    el: $('#application'),
    model: contactList
  };
  var application = new RolodexView(options);
  application.render();
});
