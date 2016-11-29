import Backbone from 'backbone';
import RolodexView from 'app/views/rolodex_view';

const ContactView = Backbone.View.extend({

  initialize: function(options) {
    this.template = options.template;
    // this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template( this.model.toJSON());


    this.$el.html(html);
    this.delegateEvents();

    // Enable chained calls
    return this;
  },
});

export default ContactView;
