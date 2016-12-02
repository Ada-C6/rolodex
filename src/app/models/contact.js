import Backbone from 'backbone';

const Contact = Backbone.Model.extend({
    defaults: {
        name: 'default name',
        email: 'default@sample.com',
        phone: '1234567890'
    },

    initialize: function() {
        console.log("created a new contact with name " + this.name);
    }
// IN THE CONSOLE, CONSOLE.LOG SAYS THIS.NAME IS UNDEFINED??? HOWEVER, THE NAME IS SHOWING UP CORRECTLY IN THE APP. WHY? IS SOMETHING COPYING ITSELF SOMEWHERE, SO THAT IT'S LOOKING AT A DIFFERENT VERSION THAT IS UNDEFINED, RATHER THAN LOOKING AT THE STATIC DATA SITTING IN APPLICATION_VIEW.JS?
});

export default Contact;
