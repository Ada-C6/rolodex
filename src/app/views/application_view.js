import $ from 'jquery';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';
import Rolodex from 'app/collections/rolodex';


var contactInfo = [
  {
    name: 'Ian',
    email: 'ian@ian.com',
    phone: '4125556765'
  }, {
    name: 'Erik',
    email: 'erik@erik.com',
    phone: '7035553245'
  }, {
    name: 'Mariah',
    email: 'mariah@mariah.com',
    phone: '6125553257'
  }
];

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    console.log("Bueller?");
    this.rolodex = new Rolodex(contactInfo);
    this.rolodexView = new RolodexView({
      el: $('#contact-cards'),
      model: this.rolodex
    });

    this.rolodexView.render();

    this.render();
  },

  render: function() {
    return this;
  }
});

export default ApplicationView;
