import $ from 'jquery';
import Backbone from 'backbone';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var application = new Application();

var appView = new ApplicationView({
  el: $('html'),
  model: application
});
