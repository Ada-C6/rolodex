import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';


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
  var contactList = new Rolodex(contactInfo);
  var appView = new RolodexView({
    el: $('#application'),
    model: contactList
  });
  appView.render();
  //
  // var contact = new ContactView({
  //   model: new Contact(contactInfo[0])
  // });
  // contact.render();
  // $('#contact-cards').append(contact.$el);
  // console.log(contact);

});
