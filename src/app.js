// import Application from 'app/models/contact';
// import ApplicationView from 'app/views/contact_view';
import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


// $(document).ready(function() {
// 	var application = new Application();


// 	var appView = new ApplicationView({
// 	  el: '#application',
// 	  model: application
// 	});
//   application.render();
// });



$(document).ready(function() {



	var contact = new Contact();

	console.log(contact.attributes.email);

	var contactView = new ContactView({
	  el: $('#contact-cards'),
	  model: contact
	});
	// console.log(contactView);

  contactView.render();
});

// make a list, stop using contactView here and go with a forEach in the rolodex file