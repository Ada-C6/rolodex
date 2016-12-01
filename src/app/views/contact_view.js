import Backbone from 'backbone';
import $ from 'jquery';
import _ from 'underscore';

// import Contact from 'app/models/contact';

//
// // const ContactView = Backbone.View.extend({
// // });

var ContactView = Backbone.View.extend({
  initialize: function(options) {
  this.template = _.template($('#tmpl-contact-card').html());

  // this.listenTo(this.model, 'change', this.render);
  },
  render: function() {

    var html = this.template({name: this.model.attributes.name}); //instance of Contact
    this.$el.html(html);

    // Re-attach DOM event listeners to our brand-spankin-new HTML
    this.delegateEvents();

    return this;
  },
});
export default ContactView;
