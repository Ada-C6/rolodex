import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import $ from 'jquery';

// $(document).ready(function() {
//     var contactList = new Rolodex(contactData);
//     var options = {
//         el: $('#application'),
//         model: contactList
//     };
//     var application = new RolodexView(options);
//     application.render();
// });

$(document).ready(function() {
    var application = new Application();

    var appView = new ApplicationView({
        el: '#contact-cards', //the div inside the body where we want the contacts to render
        model: application
    });

    appView.render();
});
