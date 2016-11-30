import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    // this.task = options.task;
    //have to tell backbone how to handle it
    this.template = options.template;

    this.listenTo(this.model, 'change', this.render);

  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
      //will create a freestanding div to put into the page to be part of the DOM once it is appended
    this.$el.html(html);

    //re-attach DOM event listeners to our brand-spankin-new HTML
    this.delegateEvents();
    // Enable chained calls
    return this;
  }
});

export default ContactView;
