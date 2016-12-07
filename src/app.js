import $ from 'jquery';
import _ from 'underscore';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
var someContact = [
  {
    name: 'Binks',
    email: 'binks@hotmail',
    phone:  938281938
  },
  {
    name: 'Bey',
    email: 'bey@hotmail',
    phone:  938283232
  },
  {
    name: 'Lee',
    email: 'bug@hotmail',
    phone:  4382948392
  },
];


$(document).ready(function(){
  $("#contact-details").hide();
  // var application = new Application();
  //
  // var appView = new ApplicationView({
  //   el: '#application',
  //   model: application
  // });
  var rolodex = new Rolodex(someContact);
  var element = _.template($('#tmpl-contact-card').html());
  // var contact = new Contact(someContact);
  // console.log(">>>>>>" + contact);

  var options = {
    model: rolodex,
    el: $('#application'),
    // template: element

  };
  var contactView = new RolodexView(options);
  // element.append(contactView.$el);
  contactView.render();

});
