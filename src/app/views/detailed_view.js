import Backbone from 'backbone';
import $ from 'jquery';
import ContactView from 'app/views/detailed_view';
import Contact from 'app/models/contact';

const DetailedView = Backbone.View.extend({
  initialize: function(options){
    this.template = options.template;
    // console.log("Inside DetailedView initialize");
    // console.log(this.model);
    // console.log(this.$el);
    // this.on('click', this.closeIfOutOfFocus, this.$el.parent);
  },
  render: function(){
    // this.delegateEvents();
    // console.log("In detailed view render");
    var result = this.template({name: this.model.get("name"), email: this.model.get("email"), phone: this.model.get("phone")});
    var html = this.$el.html(result);
    // console.log(result);
    return this;
  },
  events: {
    'click .edit-me': 'displayEditForm',
    'click' : 'doNothing' //Catch a click on the form and stop it from bubbling up to the application_view
  },
  show: function(){
    $('#contact-details').removeClass('hidden');
    this.render();
    // console.log(this.model.toJSON());
  },
  displayEditForm: function(){
    this.trigger('edit-contact', this.model);
  },
  hide: function(){
    this.$el.addClass('hidden');
  },
  doNothing: function(e){
    // console.log("In doNothing");
    e.stopPropagation();
  }
});

export default DetailedView;
