import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.model    = options.model;

    // this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template({
      contact: this.model.attributes
    });
    this.$el.html(html);

  // so we don't destroy buttons by emptying
  // re-attach DOM event listeners to our brand-new HTML
  // this.delegateEvents();

  // Enable chained calls
    return this;
  }

});

export default ContactView;
