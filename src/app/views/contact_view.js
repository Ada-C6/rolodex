import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
const ContactView = Backbone.View.extend({
  initialize: function(options) {
    console.log(options);
    this.template = options.template;
    this.contactTemplate = _.template($('#tmpl-contact-details').html());

    this.listenTo(this.model, 'change', this.render);

  },

  events: {
    'click .contact-card': 'showContact'
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

  showContact: function() {
    event.stopPropagation();

    $('#contact-details').show();

    var contactDetails = this.contactTemplate({contact:this.model.attributes});
    $('#contact-details').html(contactDetails);
  }
});

export default ContactView;
