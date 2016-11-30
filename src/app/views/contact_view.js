import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
  initialize: function(options) {
     this.contact = options.contact;
     this.template = options.template;
     this.listenTo(this.model, "change", this.render); //every backbone object has a listensTo function that lets you listen (.on listens to your own events)
  },

  render: function() {
      this.delegateEvents(); //this is a special thing we have to do when we redraw the html elements below to reconnect the DOM event handlers. Or else the buttons don't work after we add a new task

      ////////////// ADDING MODEL //////////////
      console.log(this.template);
      var html = this.template({name: this.contact.attributes.name}); // Changed to this.model from this.task when we added the model because we changed task to model (as set in addTask of task_list_view)("model" is a Backbone model and this is how we access this)
      // could also use .toJSON() instead of .attributes: b/c .attributes gives you direct access to the attributes, which can be bad because you bypass validations and can accidentally change them without triggering events.
      this.$el.html(html);
      //////////////////////////////////////////

    return this;
    // Chaining on render() is a very common thing in Backbone, and much of the code you'll find on the internet assumes you're using it. It will be much less painful to get into the habit of always returning "this" from render() now.
  //////////////////////////////////////////
  }

});

export default ContactView;
