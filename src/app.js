import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';


import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var contactData = [
  {
    name: "Malika",
    email: "Malika.NZY@gmail.com",
    phone: "206-555-1212"
  }, {
    name: "Taybor",
    email: "Tay@ada.com",
    phone: "206-123-1234"
  }
];


$(document).ready(function(){
  var contactTemplate = _.template($('#tmpl-contact-details').html());

  var cardList = new Rolodex(contactData);
  var rolodex = new RolodexView({
    el: $('#application'),
    model: cardList
  });
  rolodex.render();
  // $('#contact-details').append(cardList[0].render().$el);

  // var application = new Application();
  // var appView = new ApplicationView({
  //   el: '#application',
  //   model: application
  // });
  // application.render();
});
