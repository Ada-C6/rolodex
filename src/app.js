import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';


var firstContact = new Contact ({
  name: "Olivia",
  phone: "123456789",
  email: "justin@bieber.com"
});

console.log("WHEN THIS NEXT LINE ISN'T UNDEFINED YOU WIN")
console.log(firstContact.attributes.name);

console.log("You're in the app.js file and you're between making a contact and making a contactView'");

var oneContact = new ContactView ({
  contact: firstContact,
});

console.log("You just made a contactView and now you're trying to render it");

oneContact.render();

console.log("Technically, this rendered???");


var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});
