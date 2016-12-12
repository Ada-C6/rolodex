// import Application from 'app/models/contact';
// import ApplicationView from 'app/views/contact_view';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';




// $(document).ready(function() {
// 	var contact = new Contact();

// 	var contactView = new ContactView({
// 	  el: $('#contact-cards'),
// 	  model: contact
// 	});

//   contactView.render();
// });

// make a list, stop using contactView here and go with a forEach in the rolodex file


var contactListLooneyToons = [
	{
		name: "Bugs Bunny",
		phone: "800-123-5678",
		email: "bugs@bunny.io" 
	}, {
		name: "Elmer Fudd",
		phone: "800-987-6543" ,
		email: "elmer@fudd.io"
	}, {
		name:"Yosemite Sam" ,
		phone: "800-210-9876",
		email: "yosemite@sam.io"
	}
];

$(document).ready(function() {
	var rolodex = new Rolodex(contactListLooneyToons);
	var application = new RolodexView({
	  el: $('#application'),
	  model: rolodex
	  // contactData: contactListLooneyToons
	});

  application.render();
});












