import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

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
