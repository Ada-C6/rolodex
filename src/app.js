import $ from 'jquery';
import Backbone from 'backbone';

import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';


// import ContactView from 'app/views/contact_view';
// import Contact from 'app/models/contact';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var contactData = [
  {
    name: 'Daria Morgendorffer',
    email: 'no@nah.com',
    phone: '5551112222',
  },
  {
    name: 'Quinn Morgendorffer',
    email: 'imcute@popular.com',
    phone: '5551234567',
  },
  {
    name: 'Jane Lane',
    email: 'amiga@prettyrad.com',
    phone: '5552223333',
  },
  {
    name: 'Trent Lane',
    email: 'newnameideas@mystikspiral.com',
    phone: '5556667878',
  },
  {
    name: 'Brittany Taylor',
    email: 'thebest@cheerleader.com',
    phone: '5559873456',
  },
];

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

$(document).ready(function() {
  var rolodex = new Rolodex(contactData);
  var rolodexView = new RolodexView({
    el: $('#contact-cards'),
    model: rolodex
  });

  rolodexView.render();

  // // var contact = new Contact(contactData[0]);
  // var contactView = new ContactView({
  //   el: $('#contact-cards'), // this will probably need to change, looks like it's the section for the *whole* contact list, not just a single...?
  //   model: contact
  // });

  // contactView.render();
});
