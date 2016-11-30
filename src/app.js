import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import Application from 'app/models/application';
// import ApplicationView from 'app/views/application_view';

// I need to comment out these 2 lines later when I separate Model and View to their correct files.
// import Contact from 'app/models/contact';
// import ContactView from 'app/models/contact_view';


// var application = new Application();
//
// var appView = new ApplicationView({
//   el: '#application',
//   model: application
// });


var Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
});


var ContactView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#tmpl-contact-card').html());
  },

  render: function() {
    var html = this.template({name: this.model.get('name')});
    $(this.el).html(html);
    // this.$el.append(html);
  }
});


$(document).ready(function() {
  var contactOne = new Contact(
    {
      name: "Kelly Tran",
      phone: "432 432 5433",
      email: "sing@song.net"
    }
  );

  var contactViewOne = new ContactView({ model: contactOne });
  contactViewOne.render();
  $('#contact-cards').html(contactViewOne.el);

});


// Wed 11:22AM: I can create an array of contact hashes. every time i iterate thru each hash, i will instantiate a Contact model object and a ContactView model object, in order to achieve a view of multiple contact cards. Note: a list of model objects can be make a COLLECTION of model objects!
