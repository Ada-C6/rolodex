import Backbone from 'backbone';
import Contact from 'app/models/contact';
import $ from 'jquery';
import _ from 'underscore';


const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;

    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    this.delegateEvents();

    var contactHTML = this.template({name: this.model.toJSON().name});
    this.$el.html(contactHTML);
    return this;
  },
  events: {
    'click .contact-card': 'showDetails'
  },
  showDetails: function(e){
    this.trigger("showThis", this.model);
  }
});

export default ContactView;
