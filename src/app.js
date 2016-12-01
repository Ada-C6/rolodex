//app.js
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import $ from 'jquery';

import _ from 'underscore';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

$(document).ready(function (){


});

var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});


var contactList = [
  {
  name: "Dumbldore",
  email: "headmaster@aol.com",
  phone: "222333444"
},
{
  name: "Professor Snape",
  email: "Ilovedlilly@aol.com",
  phone: "222333444"
}];






var dumbledoreModel = new Contact(contactList[0]);

var contactTemplate = _.template($('#tmpl-contact-card').html());

console.log("contact__>", contactTemplate);

var dumbledoreView = new ContactView({
  model: dumbledoreModel,
  template: contactTemplate
});
console.log("d-View -->", dumbledoreView);


console.log("in dumble: ",dumbledoreView.render().$el);

$('#contact-cards').append(dumbledoreView.render().$el);
