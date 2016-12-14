import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';
const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.detailsTemplate = _.template($('#tmpl-contact-details').html());

    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log(this.model.attributes.name);
    var html = this.template({name: this.model.attributes.name});
    this.$el.html(html);

    return this;
  },

  events: {
    'click .contact-card': 'showDetail',
  },

  showDetail: function() {
    var html = this.detailsTemplate({
      name: this.model.attributes.name,
      email: this.model.attributes.email,
      phone: this.model.attributes.phone
    });
    $('#contact-details').show();
    $('#contact-details').html(html);
  },
});

export default ContactView;
