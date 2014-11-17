import Ember from 'ember';
import LiveSearchEngine from '../mixins/live-search-engine';

// TODO: improve with Typeahead
export default Ember.Component.extend(LiveSearchEngine, {
  store: null,
  searchString: null,
  company: null,
  allCompanies: function(){
    return this.store.find('company');
  }.property(),
  searchResults: function() {
    return this.filterSearch(
      this.get('searchString'),
      this.get('allCompanies')
    );
  }.property('searchString', 'allCompanies'),

  actions: {
    linkCompany: function(selectedCompany){
      this.set('company', selectedCompany);
    },
  }
});
