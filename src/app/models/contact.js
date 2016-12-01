import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
    defaults: {
        name: 'default name',
        email: 'default@sample.com',
        phone: '1234567890'
    },

    initialize: function() {
        console.log("created a contact with name " + this.name);
    }
});

export default Contact;
