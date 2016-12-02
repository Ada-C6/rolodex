import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
    initialize: function(options) {
        this.template = options.template;
    },

    render: function() {
        console.log(this.model.attributes);
        var html = this.template({contact: this.model.attributes});
        this.$el.html(html);

        // will need to uncomment this once I re-render views:
        // this.delegateEvents(); // this re-attaches DOM event listeners to our 'brand new' HTML every time we re-render the view

        return this;
    }
});

export default ContactView;
