import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import $ from 'jquery';



var contactData = [{name: "Satine the Cat", phone: "425 785 9393", email: "satine@himalayan.com"},
                    {name: "Bob the Pug", phone: "206 879 0202", email: "bob@pugness.com"},
                    {name: "Johnny the Jerboa", phone: "101 220 0202", email: "johnny@jerboa.com"}];

$(document).ready(function(){

  var application = new Application({rolodex: contactData});

  var appView = new ApplicationView({
    el: 'body',
    model: application
  });

  appView.render();

})
