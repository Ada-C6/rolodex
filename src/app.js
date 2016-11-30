import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Rolodex from 'app/collections/rolodex';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';


var contactData = [
{
  name: 'Matthew Pavilanis',
  phone: '269-267-3664',
  email: 'matthewpavilanis@gmail.com'
}, {
  name: 'Jessica Pavilanis',
  phone: '574-261-0261',
  email: 'jessrpav11@gmail.com'
}, {
  name: 'Diana Clark',
  phone: '269-267-3740',
  email: 'diana@dougclarkcreative.com'
}
];

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

$(document).ready(function() {
  var rolodex = new Rolodex(contactData);
  var application = new RolodexView({
    el: $('body'),
    model: rolodex
  });
    application.render();
});
