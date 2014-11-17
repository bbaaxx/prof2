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
  }

});
