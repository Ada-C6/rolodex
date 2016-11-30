import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import $ from 'jquery';
import _ from 'underscore';



var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData=  
{
    name: "Quai",
	email: "whatever@gmail.com",
	phone: "8455551234"
};

$(document).ready(function() {
  //set a variable that is an instance of the model
  //using the data from contactData
  var contact = new Contact(contactData);
  //set an instance of contact view
  var contactCard = new ContactView({
  	//contact view takes a 'template' and a model
    template: _.template($("#tmpl-contact-card").html()),
    model: contact,
    el: "#contact-cards"
    // con: contactData
  });
  //render contact card
  console.log("el:",contactCard.el)
  console.log("model:",contactCard.model)
  

  console.log( "contact-card rendering:", contactCard);
  $("#contact-cards").append(contactCard.render().$el);
  
  // $("#contact-cards").append("<h1>Hello</h1>");
});