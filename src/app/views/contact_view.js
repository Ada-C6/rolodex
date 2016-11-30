import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


const ContactView = Backbone.View.extend({
  template: _.template($('#tmpl-contact-card').html()),


  initialize: function(options) {
    // this.el = options.el;
    this.name = options.name;
    this.email = options.email;
    this.phone = options.phone;
    this.render();
    // this.thisTemplate = ;
    // this.listenTo(this.model, "change", this.render);
  },

  render: function() {
    var html = this.template(this.model.toJSON());
    // this originally said: this.$el.html(html);
    this.$el.append(html);
    // // reconnects the DOM event handlers
    // this.delegateEvents();
    // // Enable chained calls
    return this;
  },

  events: {
    'click .contact-card': 'openContact'
  },

  openContact: function(){

  }

});

// accessible elsewhere
export default ContactView;
