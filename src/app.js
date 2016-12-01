import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import _ from 'underscore';
import $ from 'jquery';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: 'Charles',
    email: 'charles@email.com',
    phone: '0987654321'
  },
  {
    name: 'Chris',
    email: 'chris@email.com',
    phone: '3216540987'
  }
];

var rolView = new RolodexView({
  el: '#application',
  contactData: contactData
});

rolView.render();

// var charlesmodel = new Contact(contactData[0]);
//
// var contactTemplate = _.template($('#tmpl-contact-card').html());
// // console.log("contact Template: ", contactTemplate);
//
// var charlesview = new ContactView({
//   model: charlesmodel,
//   template: contactTemplate
// });
// console.log("charlesview: ", charlesview);

// $('#contact-cards').append(charlesview.render().$el);
