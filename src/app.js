import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Rolodex from 'app/collections/rolodex';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import COntact from 'app/models/contact';


var contactData = [
  {
    name: "Grace Hopper",
    phoneNumber: "6105175609",
    email: "gracehopper@gmail.com", // This is unnecessary since undefined is falsey.
  }, {
    name: "Ada Lovelace",
    phoneNumber: "5037542989",
    email: "adalovelace@gmail.com", // This is unnecessary since undefined is falsey.
  }
];

$(document).ready(function() {

  var rolodex = new Rolodex(contactData);
  // var application = new Application(contactData);


  var appView = new ApplicationView({
    el: $('#application'),
    model: rolodex
  });

}); // closing $(document).ready
