import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';


$(document).ready(function() {
  var application = new Application();

  var appView = new ApplicationView({
    el: '#application',
    model: application
  });


  appView.render();
});
