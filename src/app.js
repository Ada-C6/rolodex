import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';
import Contact from 'app/models/contact';
import Rolodex from 'app/collections/rolodex';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';
import $ from 'jquery';

var hardCodedContacts = [{
  name: "christian",
  email: "christian@christian.com",
  phone: "6126550000"
},
{
  name: "lauren",
  email: "lauren@cat.com",
  phone: "6126550000"
},
{
  name: "ediff",
  email: "dummy@cat.com",
  phone: "dfikdsjfs;df"
},
{
  name: "boo",
  email: "sldk@cat.com",
  phone: "dfikdsjfs;df"
}];

$(document).ready(function(){
  var rolodex = new Rolodex(hardCodedContacts);
  // console.log("this is the rolodex",rolodex)

  var application = new ApplicationView({
    el: $('body'),
    model: rolodex // have to pass this in! i screwed this up early on and it made the new contactviews difficult to render
  });

  var rolodexView = new RolodexView({
    el: $('#contact-cards'),
    model: rolodex
  });

  rolodexView.render();

})
