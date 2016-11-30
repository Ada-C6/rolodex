import Backbone from 'backbone';

var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;

    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log(this.model.attributes);

    var html = this.template({contact: this.model.attributes});

    this.$el.html(html);

    this.delegateEvents();

    return this;

  }
});

export default ContactView;
