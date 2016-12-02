import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// import ContactView from 'app/views/contact_view';
// import Contact from 'app/models/contact';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';


$(document).ready(function(){
  // hide the modal by default
  $("#contact-details").hide();

  var application = new Application();

  var appView = new ApplicationView({
    el: 'body',
    model: application
  });

  // make a new rolodex view
  // render the app
  appView.render();


});
