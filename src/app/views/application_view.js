import Backbone from 'backbone';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  },

  events: {
    'click .btn-save': 'createContact',
    'click .btn-cancel': 'clearContact'
  },

  clearContact: function(event) {
    alert('clear called');
  },

  createContact: function(event) {
    alert('create called');
  }

});

export default ApplicationView;
