import Backbone from 'backbone';

// const ContactView = Backbone.View.extend({
// });
// ALL COPIED FROM TASKS
var ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = _.template($('tmpl-contact-card').html());

    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    var html = this.template({contact: this.model.attributes});
    this.$el.html(html);

    // Re-attach DOM event listeners to our new HTML
    this.delegateEvents();
    // Enable chained calls
    return this;
  },

  events: {
    'click .delete-button': 'deleteHandler'
  },

  deleteHandler: function() {
    // Show a popup box asking the user for confirmation
    if (window.confirm("Are you sure you want to delete this Contact?")) {
      this.model.destroy(); // implicitly calls 'remove'
      // Remove calls: 'remove' on the collection and 'update' on the collection
      console.log('This contact is destroyed');
    }
  }

});

export default ContactView;
