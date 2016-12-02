import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';

import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;

    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
    this.listElement = $('#contact-details');

    this.listenTo(this.model, "change", this.render);
  },

  events: {
    'click .contact-card': 'showDetails',
  },

  render: function() {
    this.delegateEvents();
    // ^ reconnects the DOM event handlers

    var html = this.template(this.model.toJSON())
    this.$el.html(html);
    return this;
  },

  showDetails: function(event) {
    var popupHTML = this.detailsTemplate({
      name: this.model.get("name"), phone: this.model.get("phone"), email: this.model.get("email")});

    this.listElement.html(popupHTML);
    // $('#contact-details').show();
  }

});

export default ContactView;
