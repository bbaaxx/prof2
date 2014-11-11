import Ember from 'ember';

export default Ember.Mixin.create({

  filterSearch: function(searchString, searchArray, searchProperty){
    if (!searchString) {return null;}
    var normalizeString = function(arg){
      return typeof arg === 'string' ? arg.toLowerCase() : '';
    };
    searchProperty = searchProperty ? searchProperty : 'name';
    searchString = normalizeString(searchString);
    return searchArray.filter(function(result){
      var target = normalizeString(result.get(searchProperty));
      return target.indexOf(searchString) === 0;
    }, this);
  },

  lseMakeEngine: function(searchString, searchModel, searchProperty){
    return Ember.Object.create({
      searchString: searchString,
      searchModel: this.store.findAll(searchModel),
      searchProperty: searchProperty,
      filterSearch: this.filterSearch,
      searchResults: function(){
        return this.filterSearch(
          this.get('searchString'),
          this.get('searchModel'),
          this.get('searchProperty')
        );
      }.property('searchString')
    });
  },

});
