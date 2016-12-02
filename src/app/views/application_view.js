import Backbone from 'backbone';
import $ from 'jquery';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },

  render: function() {
    return this;
  },

  hideModal: function(){
  	$('#contact-details').css("display","none");
  	console.log("hello again");
  },

  nope: function(event){
  	
  	event.stopPropagation();
  },
  events:{
  	"click body": "hideModal",
  	"click #contact-details": "nope"
  }
});

export default ApplicationView;
