//  Serves as the "entry point" and is responsible for creating whatever models and views are required to get the application running
import $ from 'jquery';
// import Contact from 'app/models/contact';
import Contact from 'app/views/contact_view';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

var contactData = [
  {
    name: 'Yeni',
    phone: 111111111,
    email: "yeni@adadevelopers.org"
  }, {
    name: 'Yuri',
    phone: 111111111,
    email: "yuri@adadevelopers.org"
  }, {
    name: 'Allison',
    phone: 111111111,
    email: "allison@adadevelopers.org"
  }
];
//

$(document).ready(function() {
  var rolodex = new Rolodex(contactData);
    // var contactList = new Contact(contactData);

  var options = {
    el: $('#application'),
    model: rolodex
    // console.log(contactData);
  };
    // var application = new TaskListView(options);
    //setting a variable called options and passing it into TaskListView is the same options as in task_list_view.js

  var application = new RolodexView(options);
  application.render();
  //original code below
  // var application = new Application(contactData);
  //
  // var appView = new ApplicationView({
  //   el: '#application',
  //   model: application
  // });

  //should render the Application view?
  // rolView.render();
  // appView.render();
});
