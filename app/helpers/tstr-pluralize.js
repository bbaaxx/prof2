import Ember from 'ember';

function tstrPluralize(quantity, singular, plural) {
  if (quantity === 1) {
    return singular;
  } else {
    return (typeof plural === 'string' ? plural : singular + 's');
  }
}

export {
  tstrPluralize
};

export default Ember.Handlebars.makeBoundHelper(tstrPluralize);
