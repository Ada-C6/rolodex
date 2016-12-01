import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// import ContactView from 'app/views/contact_view';
// import Contact from 'app/models/contact';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var peeps = [
  {
    name: "karin",
    email: "k@ada.edu",
    phone: "206-222-2121"
  },
  {
    name: "dan",
    email: "dan@ada.edu",
    phone: "206-222-2121"
  },
  {
    name: "kari",
    email: "kari@ada.edu",
    phone: "206-222-2121"
  }
];

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

$(document).ready(function(){
  // hide the modal by default
  $("#contact-details").hide();
  
  var rolodexList = new Rolodex(peeps);

  var rolodex = new RolodexView( {
    el: $('#application'),
    model: rolodexList
  });

  rolodex.render();

  // stuff to move to rolodex_view.

});
