import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';



const ContactView = Backbone.View.extend({

  initialize: function(options){
    this.template = options.template;
    this.contact = options.contact;
    // this.listenTo(this.contact, 'change', this.render);
    this.listenTo(this.model, 'change', this.render);
    console.log(">>>3333!!" + JSON.stringify(this.model.attributes.name));
  },
  render: function(){
    console.log("Contact to Render: " + JSON.stringify(this.model.attributes.name));
    console.log("TEmplate to Do stuff: " + this.template);
    //Please refer to index.html line
    var html = this.template({name: this.model.attributes.name});
    this.$el.html(html);
    this.delegateEvents();
    return this;
  },

});

export default ContactView;
