import Backbone from 'backbone';

const ContactView = Backbone.View.extend({
    initialize: function(options) {
        this.template = options.template;
    },

    render: function() {
        console.log(this.model.attributes);
        var html = this.template({name: this.model.get('name')});
        this.$el.html(html);

        this.delegateEvents(); // this re-attaches DOM event listeners to our 'brand new' HTML every time we re-render the view

        return this;
    }
});

export default ContactView;
