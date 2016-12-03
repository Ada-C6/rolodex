import Backbone from 'backbone';

const ContactView = Backbone.View.extend({

  initialize: function(options) {
    this.template = options.template;

    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    console.log(this.model.attributes);
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);

    // Re-attach DOM event listeners
    this.delegateEvents();

    // Enable chained calls
    return this;
  },

  events: {
    "click .btn-save": "saveHandler",
    "click .btn-cancel": "cancelHandler"
  },

  saveHandler: function(event) {
    console.log("saveHandler called!");
    this.model.toggleComplete();
  },

  cancelHandler: function(event) {
    console.log("cancelHandler called!");
    if (window.confirm("Are you sure you want to cancel this contact?")) {
      console.log("going to cancel it!");
      this.model.destroy();
    }
  }


});

export default ContactView;
