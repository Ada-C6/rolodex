//app.js
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import $ from 'jquery';

import _ from 'underscore';
// model
import Contact from 'app/models/contact';

//collections/ views
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';

// do I need this one? from collections
import Rolodex from 'app/collections/rolodex';

// contacts to start with with.
// spacing used to disquish diff. parts of code. ok to use this arrangement?
var contactList = [
  {
    name: "Albus Dumbldore",
    email: "headmaster@wizzard.edu",
    phone: "1112223344"
  },
  {
    name: "Professor Snape",
    email: "Ilovedlilly@aol.com",
    phone: "2062224444"
  },

  {
    name: "Frida Kahlo",
    email: "artist@mexico.org",
    phone: "0002223333"
  },

    {
      name: "Sonia Sotomayor",
      email: "judge@supreme.org",
      phone: "3334445555"
    }

];

// starts at 1st load.
$(document).ready(function (){
  // var application = new Application();
  // practice hiding things.
  // $("#contact-details").hide(); // no details to hide yet.

  var appView = new RolodexView({
    el: $('#application'),
    // abstraction.. introducing.
    contactData: contactList,
    model: application,
  });
  appView.render();

});






//
// var dumbledoreModel = new Contact(contactList[0]);
//
// var contactTemplate = _.template($('#tmpl-contact-card').html());
//
// console.log("contact__>", contactTemplate);
//
// var dumbledoreView = new ContactView({
//   model: dumbledoreModel,
//   template: contactTemplate
// });
// console.log("d-View -->", dumbledoreView);
//
//
// console.log("in dumble: ",dumbledoreView.render().$el);
//
// $('#contact-cards').append(dumbledoreView.render().$el);
