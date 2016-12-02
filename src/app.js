import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var staticData = [
  {
    name: "charles",
    phone: "555",
    email: "c@gmail.com"
  },
  {
    name: "kari",
    phone: "666",
    email: "k@gmail.com"
  }
];

$(document).ready(function() {
  var contactList = new ContactList(contactData);
  var options = {
    el: $('#application'),
    model: contactList
  };
  var application = new ContactListView(options);
  application.render();
});
