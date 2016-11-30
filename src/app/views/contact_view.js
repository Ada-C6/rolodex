const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.contact = options.contact;
    this.template = options.template;
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);

    return this;
  }
});

export default ContactView;
