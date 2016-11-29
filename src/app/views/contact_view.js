import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.name = options.name;
    this.email = options.email;
    this.phone = options.phone;
    // this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    // var html = this.template({task: this.model.toJSON()})
    // this.$el.html(html);
    // // reconnects the DOM event handlers
    // this.delegateEvents();
    // // Enable chained calls
    return this;
  }

});

// accessible elsewhere
export default ContactView;
