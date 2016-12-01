import $ from 'jquery';
//
// import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import ContactListView from 'app/views/contact_list_view';
// import Contact from 'app/models/contact';
//
var contactList = [
  {name: 'Erik', email: 'eam@dream.of', phone: '008-008 8888'},
  {name: 'Fia', email: 'sam@dream.of', phone: '008-008 3333'},
  {name: 'Ben', email: 'BM@dream.of', phone: '008-008 2222'}
];

//
// var application = new Application(); // from cloned doc
//
$(document).ready(function() {
 var listElement = $('#contact-cards');
//
// console.log('CHECKPOINT');
  var contactBox = new ContactView( {
    el: listElement,
    model: contactList
//     el: '#application',
//     model: application
  });

  var contactGrid = new ContactListView( {
    el: listElement,
    contacts: contactList
  });

  var formView = new ApplicationView( {
    el: $('.contact-form')
  });

  // DO THE INPUT HERE?

  formView.render();
  contactGrid.render();

//
});
