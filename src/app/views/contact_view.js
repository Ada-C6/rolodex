import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.detailsTemplate = _.template($("#tmpl-contact-details").html());
    // console.log(this.template);

    // this.listenTo(this.model, "change", this.render); I think we only needed this for delete/complete
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    // console.log(html);
    this.$el.html(html);

    // When we add new html, reattach our DOM event listeners to the new html
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
