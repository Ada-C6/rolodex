import Backbone from 'backbone';
import $ from 'jquery';


import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  },

  events: {
    'dblclick': "hideModalHandler",
  },

  hideModalHandler: function(event) {
    console.log("hideModal Handler called!");
    $('#contact-details').hide();
  }

});

export default ApplicationView;
