import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import ApplicationView from 'app/views/application_view';

// Starter Data to initialize the Rolodex Collection
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

  // initialize the collection of contacts with the contactData specified above
  var rolodex = new Rolodex(contactData);

  // Define the parent element controlled by the ApplicationView
  var appView = new ApplicationView({
    el: $('body'), //switched to body from #application so that clicking anywere on the screen would hide the popup
    model: rolodex
  });

  // Define the parent element controlled by the RolodexView
  var roloView = new RolodexView({
    el: $('main'),
    model: rolodex
  });

  // Display the originally stored contacts
  roloView.render();

}); // closing $(document).ready
