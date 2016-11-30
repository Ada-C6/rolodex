import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var contactInfo = [
  {
    name: 'Ian',
    email: 'ian@ian.com',
    phone: '4125556765'
  }, {
    name: 'Erik',
    email: 'erik@erik.com',
    phone: '7035553245'
  }, {
    name: 'Mariah',
    email: 'mariah@mariah.com',
    phone: '6125553257'
  }
];

$(document).ready(function() {
  var application = new Application(contactInfo);
  var appView = new ApplicationView({
    el: '#application',
    model: application
  });
  appView.render();
});
