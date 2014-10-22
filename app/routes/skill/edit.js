import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate: function () {
    this.render('skills/create',{
      controller: 'skills/create',
      model: this.modelFor('skill')
    });
  },
});
