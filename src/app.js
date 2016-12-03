import $ from 'jquery';

import Application from 'app/models/application';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';


var defaultContacts = [
  {
  name: "Josh",
  email: "jlp@test.com",
  phoneNumber: "123-456-7890"
}, {
  name: "Jen",
  email: "jmo@test.com",
  phoneNumber: "123-123-1234"
}
];

$(document).ready(function() {
  $('#contact-details').hide();
  var newRolodex = new Rolodex(defaultContacts);

  var newRolodexView = new RolodexView ({
    model: newRolodex,
    el: $('#application')
  });
  newRolodexView.render();
});


// var application = new Application(
//
// );
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: contact
// });
