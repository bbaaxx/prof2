import Ember from 'ember';


export default Ember.ObjectController.extend({

  indicatorEditor: false,
  indicatorContainer: null,
  indicatorEditorTransition: false,

  actions: {
    addingIndicator: function(){
      if ( this.toggleProperty('indicatorEditor') ) {
        this.set('indicatorContainer', this.store.createRecord('skill-indicator'));
        this.set('indicatorEditorTransition', false);
      } else {
        this.get('indicatorContainer').deleteRecord();
        this.set('indicatorContainer', null);
      }
    },
    addIndicator: function(){
      var selfie = this;
      var model = this.get('model');
      this.set('indicatorEditorTransition', true);
      model.get('indicators').then(function(indicators){
        indicators.pushObject(selfie.get('indicatorContainer'));
        selfie.setProperties({
          indicatorContainer: null,
          indicatorEditor: false
        });
      });
    },
    saveModel: function(){
      this.get('model').save();
      this.transitionToRoute('skill', this.get('model'));
    },
  }
});
