import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact'
import $ from 'jquery';


var application = new Application();

// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });

var contactData=  
{
    name: "Quai",
	email: "whatever@gmail.com",
	phone: "8455551234"
};

$(document).ready(function() {
  var contact = new Contact(contactData);
  var application = new ApplicationView({
    el: $('#application'),
    model: contact
  });
  application.render();
});