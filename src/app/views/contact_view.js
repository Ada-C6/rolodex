import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';

const ContactView = Backbone.View.extend({
	initialize: function(options) {
		this.template = options.template;

// if my contact changes, we re-render
		this.listenTo(this.model, 'change', this.render );
  }, //initialize end



  render: function() {
// this sets what we want to see
  var html = this.template({name: this.model.attributes.name});

  this.$el.html(html);

// this helps re-bind events since the html is all new
  this.delegateEvents();

    // Enable chained calls
  return this;
  }, //render end

});

export default ContactView;
