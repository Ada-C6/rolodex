import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
  // This model should have the attributes for
  // a single contact: name, phone number, and email.
	defaults: {
		name: "placeholder",
		email: "placeholder",
		phone: "7575551234"
	},
	initialize: function (options){
		console.log("Contact card for: "+ this.get("name"))
	}
});

export default Contact;
