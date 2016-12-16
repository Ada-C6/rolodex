// QUESTION - What is the best way to add a model/view at the same time? I feel like I am bouncing around hoping I have everything filled out but no systematic approach to actually filling out the two components. Especially because so much existing code is cut and moved around to accomodate.

import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';

import ContactView from 'app/views/contact_view';
import Contact from 'app/models/contact';

import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';



var contactData = [
  {
    name: 'Molly',
    email: 'kj@gmail.com',
    phone: 6178884444
  },
  {
    name: 'Caroline',
    email: 'cj@gmail.com',
    phone: 6178884444
  },
  {
    name: 'Dolores',
    email: 'gdc@gmail.com',
    phone: 6178884444
  },
  {
    name: 'Chandrea',
    email: 'cp@gmail.com',
    phone: 6178884444
  },
  {
    name: 'Mary',
    email: 'mj@gmail.com',
    phone: 6037727779
  }
];

$(document).ready(function() {
  // QUESTION: Why in Charles' example does he not have to use Document.ready -> It was the order that the HTML went into. Because we loaded the script tag at the bottom. 

  var rolodex = new Rolodex(contactData);


  var listOfContacts = new RolodexView({
    el: 'body',
    // Question: Is this the name of the model contact or the variable defined above?
    model: rolodex
  });

  listOfContacts.render();

  // var appView = new ApplicationView({
  //   el: '#application',
  //   model: application
  // });
});
