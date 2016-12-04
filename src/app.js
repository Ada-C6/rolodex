import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Rolodex from 'app/collections/rolodex';
import ApplicationView from 'app/views/application_view';

// some data to start with
var contactData = [
  {
    name: 'Jane',
    phone: '123-4567',
    email: 'Janedoe2@gmail.com'
  },
  {
    name: 'John',
    phone: '369-2468',
    email: 'Johndoe@gmail.com'
  }
];

$(document).ready(function() {

  var rolodex = new Rolodex(contactData); //create new collection that takes in starter data

  $("#contact-details").hide(); //make sure that the modal is hidden by default

  var application = new ApplicationView({
    el: $('#application'), //element is the application div inside bodys; seems like I need this even though this.$el is not called in application_view??o_O
    model: rolodex //pass collection of models to applicationview
  });
  application.render(); //render the application view
});

$(document).mouseup(function (e)
{
    var container = $("#contact-details");

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
    }
});
