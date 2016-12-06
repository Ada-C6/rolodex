import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';



var contactData = [
  {
    name: 'Abominable Snowman',
    email: 'fun@destruction.com',
    phone: '206-555-YETI'
  },
  {
    name: 'Rudolph',
    email: 'SantasNumber1@northpole.com',
    phone: '206-RED-NOSE'
  },
  {
    name: 'Grinch',
    email: 'garbage@greasyblackpeel.com',
    phone: '206-DIE-XMAS'
  },
];

// $(document).ready(function() {
//   var contactTemplate = _.template($('#tmpl-contact-card').html());
//   var contactListElement = $('#contact-cards');
//   var cardList = [];
//
//   contactData.forEach(function(contact) {
//     var card = new ContactView({
//       contact: contact,
//       template: contactTemplate
//     });
//     cardList.push(card);
//     contactListElement.append(card.render().$el);
// });

$(document).ready(function() {
  var rolodex = new Rolodex(contactData);

  var application = new RolodexView({
    el: $('#application'),
    model: rolodex
    // taskData: taskData -- old code
  });
  application.render();
});

$(document).mouseup(function (e)
{
    var container = $("#contact-details");

    if (!container.is(e.target)  && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});


// });
