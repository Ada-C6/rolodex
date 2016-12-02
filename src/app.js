import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import $ from 'jquery';

$(document).ready(function() {
    var appView = new ApplicationView({
        el: '#application', //the div inside the body where we want the contacts to render
    });

    appView.render();
});
