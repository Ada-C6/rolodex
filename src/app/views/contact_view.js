import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';


const ContactView = Backbone.View.extend({
  // template: _.template($('#tmpl-contact-card').html()),
  initialize: function(options) {
    // this.model = options.model
    // console.log("we are in the contactview function, and these are the options:", this.model)
    this.name = this.model.name;
    this.email = this.model.email;
    this.phone = this.model.phone;
    this.template = options.template;
    this.listenTo(this.model, "change", this.render);
  }, // end of initialize

  render: function() {
    // console.log("inside contact render, here is this.model", this.model)
    var html = this.template({contact: this.model.toJSON()});
    this.$el.html(html);
    // not sure if this is actually necessary in this case.
    this.delegateEvents();
    return this;
  }, //,

  events: {
    // i have this in the contactview so i don't need to worry about passing a particular model object to the RolodexView.
    'click .contact-card': 'showModal'
  },
  //
  showModal : function(event) {
    event.stopPropagation(); // stop modal from hiding, which is the default behavior
    var bubble = $('#contact-details')
    var templateA = _.template($('#tmpl-contact-details').html());
    bubble.empty();
    var html = templateA({contact: this.model.toJSON()});
    bubble.html(html);
    bubble.show()
  }
});
// accessible elsewhere
export default ContactView;
