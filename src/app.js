import _ from 'underscore';
import $ from 'jquery';
import Backbone from 'backbone';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

$(document).ready(function() {
  var application = new Application();
  var appView = new ApplicationView({
    el: 'html',
    model: application
  });
  appView.render();
  // $(window).on('click', hideModal);
  //
  // // console.log(appView.$el);
  // var hideModal = function(e) {
  //   if (e.target.id == 'contact-details' || e.target.class == 'contact-card') {
  //     console.log(e.target.id);
  //     return;
  //   } else if ($(e.target).closest('#contact-details').length || $(e.target).closest('.contact-card').length) {
  //     return;
  //   } else {
  //     console.log('hiding stuff');
  //     $('#contact-details').hide();
  //   }
  // };
});
