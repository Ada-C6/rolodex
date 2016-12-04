import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    // this.detailsTemplate = _.template($('#tmpl-contact-details').html());

    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log(this.model.attributes);

    var html = this.template({contact: this.model.attributes});

    this.$el.html(html);

    this.delegateEvents();

    return this;

  },

  events: {
    'click .contact-card': 'modalHandler'
  },

  modalHandler: function(event) {
    console.log("modalHandler called");
    var detailsTemplate = _.template($('#tmpl-contact-details').html());
    var detailsHTML = detailsTemplate({
      name: this.model.attributes.name,
      email: this.model.attributes.email,
      phone: this.model.attributes.phone
    });
    $('#contact-details').fadeIn();
    $('#contact-details').html(detailsHTML);

    // this.trigger('show', this);
  }
});

export default ContactView;
