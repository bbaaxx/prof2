import Ember from 'ember';

function fstrCapfirst(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export {
  fstrCapfirst
};

export default Ember.Handlebars.makeBoundHelper(fstrCapfirst);
