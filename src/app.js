import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';

$(document).ready(function() {
  var application = new Application();
  var appView = new ApplicationView({
    el: 'html',
    model: application
  });

  appView.render();
});
