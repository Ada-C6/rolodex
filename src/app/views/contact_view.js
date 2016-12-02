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
    // console.log("this is the html variable",html)
    // // reconnects the DOM event handlers
    this.delegateEvents();
    // // Enable chained calls
    return this;
  }, //,

  events: {
    'click .contact-card': 'showModal'
  },
  //
  showModal : function(element) {
    var bubble = $('#contact-details')
    console.log(element);
    console.log(this.model.get("name"))
    bubble.empty();
    bubble.append("<h3>Name: " + this.model.get("name") + "</h3")
    bubble.append("<h4>Email: " + this.model.get("email") + "</h4")
    bubble.append("<h5>Phone: " + this.model.get("phone") + "</h5")
    bubble.show()
  }
});
// accessible elsewhere
export default ContactView;
