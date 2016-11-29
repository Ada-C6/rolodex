// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });


$(document).ready(function() {
  var application = new RolodexView({
    el: $('#application'), //setting the el as 'this' when 'this' is referenced in TaskListView
    model: contact
  });
  application.render();
});
