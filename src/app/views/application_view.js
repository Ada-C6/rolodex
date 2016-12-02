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
  	console.log("hello again")
  },
  events:{
  	"click .Quai": "hideModal"
  }
});

export default ApplicationView;
