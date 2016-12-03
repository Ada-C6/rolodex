import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';



var rawContact = [
  {
    name: 'Crispin Jockers',
    email: 'crispy@me.com',
    phone: '2062823396'
  }, {
    name: 'Royale King',
    email: 'royal@me.com',
    phone: '2062823200'
  }, {
    name: 'Chelsea Kennedy',
    email: 'chel@me.com',
    phone: '2062829980'
  },
  {
    name: 'Jihan Zencirli',
    email: 'witwijs@me.com',
    phone: '2062821212'
  }
];

$(document).ready(function() {

  var rolodex = new Rolodex(rawContact);//rawContact
  var rolodexView = new RolodexView({
    el: $('#contact-cards'),
    model: rolodex
  });
  // var application = new Application(populateData);
  // var applicationView = new ApplicationView({
  //   el: $('#application'),
  //   model: application
  // });
  rolodexView.render();
  // rolodexView.render();
  // applicationView.render();
});
