import Backbone from 'backbone';
import $ from 'jquery';
import DetailedView from 'app/views/detailed_view';

const ContactView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;
    this.detailedTemplate = options.detailed;
    // console.log(this.$el);
    // this.on('click', this.closeIfOutOfFocus, this.$el.parent);
  },
  render: function(){
    this.delegateEvents();
    this.$el.html(this.template({name: this.model.get("name")}));
    return this;
  },
  events: {
    'click' : 'displayDetails'
  },
  displayDetails: function(event){
    this.trigger('contact-view-clicked', this.model);
    event.stopPropagation();
    // console.log(this.model.toJSON());
  }
});

export default ContactView;
