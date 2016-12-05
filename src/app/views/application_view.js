import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

import ContactView from 'app/views/contact_view';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
import Application from 'app/models/application';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  }

  // events: {
  //   "click .contact-card": "contactCardShow"
  // },
  //
  // contactCardShow: function(event) {
  //   console.log(this);
  //   this.model.toggleShowContactCard();
  // }

});

export default ApplicationView;
