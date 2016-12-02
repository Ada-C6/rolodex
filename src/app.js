import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';


import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

var contactData = [
  {
    name: 'Joaquin Phoenix',
    phone: 1234,
    email: 'joaquin.phoenix@catmail.com'
  }, {
    name: 'Valentino Gallardo',
    phone: 2345,
    email: 'valentino.gallardo@catmail.com'
  }, {
    name: 'Jacob Buendia',
    phone: 4567,
    email: 'jacob.buendia@catmail.com'
  }
];


// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
$(document).ready(function() {

  var contact = new Rolodex(contactData);

  var options = {
    el: 'html',
    model: contact
  };
  var rolodex = new RolodexView(options);
    rolodex.render();
});
