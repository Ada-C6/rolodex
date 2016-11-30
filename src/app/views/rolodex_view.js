import Backbone from 'backbone';

const RolodexView = Backbone.View.extend({
	initialize: function(options) {
    // Compile a template to be shared between the individual tasks
    this.contactTemplate = options.template;

    // Keep track of the <ul> element
    // this.listElement = this.$('.task-list');

    // We'll keep track of a list of task models and a list
    // of task views.
    // this.cardList = [];

    // // Process each task
    // this.model.forEach(function(contact) {
    //   this.addTask(task);
    // }, this); // bind `this` so it's available inside forEach
});

export default RolodexView;
