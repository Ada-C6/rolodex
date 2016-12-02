import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';

import $ from 'jquery';
import _ from 'underscore';



var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData=  
[{
    name: "Quai",
	email: "whatever@gmail.com",
	phone: "8455551234"
 },
 {
    name: "Jamie",
	email: "jamie@gmail.com",
	phone: "2225551234"
 },
 {
    name: "Charles",
	email: "charles@gmail.com",
	phone: "8458881234"
 },
 {
    name: "Chris",
	email: "chris@gmail.com",
	phone: "8455551000"
}];

$(document).ready(function() {
  //set a variable that is an instance of the model
  
  //using the data from contactData
   var rolodex= new Rolodex([
  	new Contact(contactData[0]),
  	new Contact(contactData[1]),
  	new Contact(contactData[2]),
  	new Contact(contactData[3])
  ]);


  // var contact = new Contact(contactData[0])
  // set an instance of contact view
  // var contactCard = new ContactView({
 
  // 	//contact view takes a 'template' and a model
  //   template: _.template($("#tmpl-contact-card").html()),
  //   model: contact
  // });
 
  
  //append contact card template onto "contact cards" ul
    // $("#contact-cards").append(contactCard.render().$el);
  var rolodexView = new RolodexView({
  	template: _.template($("#tmpl-contact-card").html()),
  	model: rolodex,
  	 el: $('#application')
  });



  rolodexView.render();
  
});