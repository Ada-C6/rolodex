import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Contact from 'app/models/contact';


const ContactView = Backbone.View.extend({
	initialize: function(options) {
	  // Compile a template to be shared between the individual tasks
	  this.contactTemplate = options.template;

	  this.model=options.model;

	  console.log("options for contact view:",options)
	  // var that = this;
	  // setInterval(function(){
	  // 	console.log("I'm alive", that.getCid());

	  // },1000)

  },
  	// getCid: function(){
  	// 	return this.cid;
  	// },

	render: function() {
	    //could use .attributes but that's bad for some reason
	    // var html = this.contactTemplate({contact: this.model.attributes})
	    // this.delegateEvents();
	    this.delegateEvents();

	    var html = this.contactTemplate({contact: this.model.toJSON()})

	    // var anotherHtml = this.detailsTemplate({contact: this.model.toJSON()})	  	//I need to take the data from the model
	  	//insert it into the html 
	  	//in the spot where <%-name %> is in the underscore template
	  	this.$el.html(html);
    return this;
  },

  	showModal: function(event){
  		event.stopPropagation();

  		console.log("hello modal");
  		
  		var details= new  ContactView({
  		  el: "#contact-details",
  		  model: this.model,
	      template: _.template($("#tmpl-contact-details").html())
	    });

  		details.render()
  		$('#contact-details').css("display","block");
  },
  	events: {
    	"click .contact-card": "showModal"
  	}
});

export default ContactView;
