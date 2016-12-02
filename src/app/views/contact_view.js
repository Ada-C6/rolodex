import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';


const ContactView = Backbone.View.extend({
	initialize: function(options) {
	  // Compile a template to be shared between the individual tasks
	  this.contactTemplate = options.template;
	  // this.model=options.model;


  },

	render: function() {
	    //could use .attributes but that's bad for some reason
	    // var html = this.contactTemplate({contact: this.model.attributes})
	    this.delegateEvents();

	    var html = this.contactTemplate({contact: this.model.toJSON()})
	    
	  	//I need to take the data from the model
	  	//insert it into the html 
	  	//in the spot where <%-name %> is in the underscore template
	  	this.$el.html(html);
    return this;
  },

  	showModal: function(){
  		console.log("hello modal");
  		$('#contact-details').css("display","block");
  },
  events: {
    "click .contact-card": "showModal"
    
  }
});

export default ContactView;
