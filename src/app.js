import $ from 'jquery';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var contactData = [
  {name: 'Erik', email: 'eam@dream.of', phone: '008-008 8888'},
  {name: 'Fia', email: 'sam@dream.of', phone: '008-008 3333'},
  {name: 'Ben', email: 'BM@dream.of', phone: '008-008 2222'}
];

var application = new Application(); // from cloned doc

$(document).ready(function() {
  var listElement = $('#contact-cards');

  var contactOptions = {
    el: '#application',
    model: application
  };

  var appView = new ApplicationView(contactVariableOfSomeSort);

  var contactView = new ContactView({
    el: '#contact-cards',
    model: contact
  });

  appView.render();
  contactView.render();

});
