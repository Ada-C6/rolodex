import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Backbone from 'backbone';
import $ from 'jquery';
// import ContactView from 'app/views/contact_view';
// import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';


var application = new Application();

var appView = new ApplicationView({
  el: '#application',
  model: application
});

var contactData = [
  {
    name: 'Shari',
    email: 'noshoes@gmail.com',
    phone: '777-555-2222'
  }, {
    name: 'Yuri',
    email: 'iloveolive@gmail.com',
    phone: '666-333-2112'
  },
  {
    name: 'Mary',
    email: 'yolo@gmail.com',
    phone: '206-390-4053'
  }
];
$(document).ready(function(){
  var rolodex = new Rolodex(contactData);
  var options = {
    el: $('#application'),
    model: rolodex
  };
  var rolodexView = new RolodexView(options);

  rolodexView.render();
});
