import $ from 'jquery';

import ApplicationView from 'app/views/application_view';

var contactList = [
  {name: 'Erik', email: 'eam@dream.of', phone: '008-008 8888'},
  {name: 'Fia', email: 'sam@dream.of', phone: '008-008 3333'},
  {name: 'Ben', email: 'BM@dream.of', phone: '008-008 2222'}
];

$(document).ready(function() {
  var formView = new ApplicationView( {
    el: '#application',
    // model: application

    // el: $('.contact-form'),
    contacts: contactList
  });

  formView.render();

//
});
