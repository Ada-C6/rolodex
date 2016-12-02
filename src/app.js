import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';


$(document).ready(function() {
  $("#contact-details").addClass("hide-item");
  var application = new Application();

  var appView = new ApplicationView({
    el: 'html',
    model: application
  });



  appView.render();
});
