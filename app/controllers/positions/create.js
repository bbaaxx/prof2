import Ember from 'ember';
import LiveSearchEngine from '../../mixins/live-search-engine';

export default Ember.Controller.extend(LiveSearchEngine, {

  // TODO: improve with observers
  companySearchBox: function(key,value){
    if (this.get('model.company.id')) {
      return this.get('model.company.name');
    }
    return value;
  }.property('model.company'),

  companySearchResults: function() {
    return this.filterSearch(
      this.get('companySearchBox'),
      this.get('model.allCompanies')
    );
  }.property('companySearchBox'),

  actions: {
    attachCompany: function(company){
      this.set('model.company', company);
    },
    newActivity: function() {
      this.get('model.activities')
        .pushObject(this.store.createRecord('position-activity'));
    }
  }


});
