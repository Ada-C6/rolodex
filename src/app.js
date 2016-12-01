// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';

import $ from 'jquery';

import ContactListView from 'app/views/contact_list_view';

import Rolodex from 'app/collections/rolodex';

var contactData = [
    {
        name: 'hello world',
        email: 'testing@world.com',
        phone: '2345678901'
    }
];

$(document).ready(function() {
    var contactList = new ContactList(contactData);
    var options = {
        el: '#application',
        model: application
    };
    var application = new ContactListView(options);
    application.render();
});

// var application = new Application();
//
// var appView = new ApplicationView({
//     el: '#application',
//     model: application
// });
