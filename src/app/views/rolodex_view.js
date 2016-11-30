import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';

import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';

var RolodexView = Backbone.View.extend({
  initialize: function(options) {
    this.contactTemplate = _.template($('#contact-card').html());
  }
});

export default RolodexView;
