import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';

import Backbone from 'backbone';
import $ from 'jquery';

var peeps = [
  {
    name: "karin",
    email: "k@ada.edu",
    phone: "206-222-2121"
  },
  {
    name: "dan",
    email: "dan@ada.edu",
    phone: "206-222-2121"
  },
  {
    name: "kari",
    email: "kari@ada.edu",
    phone: "206-222-2121"
  }
];

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    // make a new rolodex collection

    var rolodexList = new Rolodex(peeps);

    var rolodex = new RolodexView( {
      el: $('body'),
      model: rolodexList
    });

    rolodex.render();

  },

  render: function() {
    // reattach dom even listeners to our brand spanking new HTML
    this.delegateEvents();

    return this;
  }
});

export default ApplicationView;
