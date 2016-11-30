import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';


import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var peeps = [
  {
    name: "karin",
    email: "k@ada.edu",
    phone: "206-222-2121"
  },
  {
    name: "sky",
    email: "sky@ada.edu",
    phone: "206-222-2121"
  },
  {
    name: "esther",
    email: "esther@ada.edu",
    phone: "206-222-2121"
  }
];

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

$(document).ready(function(){
  var contactCardTemplate = _.template($('#tmpl-contact-card').html());

  var contactListElement = $('#contact-cards');

  var cardList = [];

  peeps.forEach(function(contactDeets) {
    var contact = new Contact(contactDeets);

    var card = new ContactView({
      model: contact,
      template: contactCardTemplate
    });
    cardList.push(card);
    contactListElement.append(card.render().$el);
  });
});
