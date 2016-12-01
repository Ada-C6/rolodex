import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
    this.template = options.template;
    this.detailsTemplate = _.template($('#tmpl-contact-details').html());
  },
  render: function() {
    console.log(this.model.attributes);
    console.log("This should be the name: " + this.model.get('name'));
    var html = this.template({name: this.model.get('name')});
    this.$el.html(html);
    this.delegateEvents();

    return this;
  },
  events: {
    'mouseenter .contact-card': "mouseIn",
    'mouseleave .contact-card': "mouseOut"
  },

  mouseIn: function(event) {

    this.trigger("showDetails", this);

  },

  mouseOut: function(event) {
    this.trigger("hideDetails", this);
    // console.log("stopped hovering over the thing");
    // $('#contact-details').toggle();
  }

});

export default ContactView;
