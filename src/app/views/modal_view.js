import $ from 'jquery';
import Backbone from 'backbone';

const ModalView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
  },

  render: function() {
    var html = this.template({
      contact: this.model.attributes
    });

    var editButton = '<h3 class="button btn-edit">Edit</h3>';

    this.$el.html(html);

    this.$el.append(editButton);

    // so we don't destroy buttons by emptying
    // re-attach DOM event listeners to our brand-new HTML
    this.delegateEvents();

    // Enable chained calls
    return this;
  },

  events: {
      'click .btn-edit': 'editContact'
  },

  editContact: function(event) {
  console.log("editContact called");
  this.model.trigger('edit', this.model);
  }

});

export default ModalView;
