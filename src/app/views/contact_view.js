import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Contact from 'app/models/contact';
// only responsible for rendering the single contact details once popped up
var ContactView = Backbone.View.extend({
  initialize: function(options) {

    this.Template = _.template($('#tmpl-contact-card').html());
    console.log(JSON.stringify(this.model[0].name));
  },
  render: function(){
    console.log("element " + this.model[0].name);
    var card = {name: (JSON.stringify(this.model[0].name))};
    var html = this.Template(card);
    this.$el.html(html);
    // this.delegateEvetns();
  },
});

export default ContactView;
