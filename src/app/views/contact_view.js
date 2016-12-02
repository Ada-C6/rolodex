import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.detailsTemplate = _.template($("#tmpl-contact-details").html());
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);

    this.delegateEvents();

    return this;
  },

  events: {
    "click .contact-card": "contactDetailsHandler"
  },

  contactDetailsHandler: function(event) {
    event.stopPropagation();

    $("#contact-details").show();

    var htmlForDetails = this.detailsTemplate({contact: this.model.attributes});
    $("#contact-details").html(htmlForDetails);
  }
});

export default ContactView;
