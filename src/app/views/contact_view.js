import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


const ContactView = Backbone.View.extend({
  // template: _.template($('#tmpl-contact-card').html()),
  initialize: function(options) {
    this.name = options.name;
    this.email = options.email;
    this.phone = options.phone;
    this.template = options.template;
    this.listenTo(this.model, "change", this.render);
  }, // end of initialize

  render: function() {
    var html = this.template({contact: this.model.toJSON()});
    // this originally said: this.$el.html(html);
    this.$el.html(html);
    // // reconnects the DOM event handlers
    this.delegateEvents();
    // // Enable chained calls
    return this;
  } //,
  //
  // events: {
  //   'click .contact-card': 'openContact',
  //   'click .'
  // },
  //
  // openContact: function(){
  //
  // }
});
// accessible elsewhere
export default ContactView;
