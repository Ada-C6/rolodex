import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var contactsData = [
  {
    name: "Pancho Perez",
    email: "ju kidin me? we no got no fones!",
    phone: "dos latas y un cordel"
  },
  {
    name: "Juanita Sanchez",
    email: "pero y este que se piensa?",
    phone: "guan-tu...que dice?"
  },
  {
    name: "Perequita Pita",
    email: "hay que encenderle una velita a San Lazaro",
    phone: "oigo???"
  }
];


var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
  },
  render: function() {
    var html = '<div class="contact">';
    html += '<h2>' + this.contact.name + '</h2>';
    html += '</div>';
    this.$el.html(html);
    return this;
  }
});

$(document).ready(function() {
  var contactListElement = $('#contact-details')
  var card = new ContactView({contact: contactsData[0]});
  contactListElement.append(card.render().$el);
});

// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });
