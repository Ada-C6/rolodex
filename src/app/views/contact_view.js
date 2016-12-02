import $ from 'jquery';
import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.modal = options.modal;
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);

    // // Re-attach DOM event listeners to our new HTML
    // this.delegateEvents();

    // Enable chained calls
    return this;
  },

  events: {
    'click .contact-card': 'createModal'
  },

  createModal: function(event) {
    var modalHtml = this.modal({contact: this.model.attributes});
    $('#contact-details').html(modalHtml);

    $('#contact-details').show();
    console.log('showing');
    return false;
  }

});

export default ContactView;
