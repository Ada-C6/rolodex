import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';


import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var contactData = [
  {
    name: "Malika",
    email: "Malika.NZY@gmail.com",
    phone: "206-555-1212"
  }
];


$(document).ready(function(){
  var contactTemplate = _.template($('#tmpl-contact-details').html());

  var cardList = new Rolodex(contactData);

  // $('#contact-details').append(cardList[0].render().$el);

  var application = new Application();
  var appView = new ApplicationView({
    el: $('#application'),
    model: cardList
  });
  application.render();
});
