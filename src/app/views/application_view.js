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
  	if ($('#contact-details').css("display") != "none"){
  		  $('#contact-details').css("display","none");
  		console.log("bye modal");
  	}
  	console.log("I clicked outside of modal")
  },

  nope: function(event){
  	console.log("does this even work?")
  	event.stopPropagation();

  },

  events:{
  	"click": "hideModal",
  	"click #contact-details": "nope"
  }
});

export default ApplicationView;
