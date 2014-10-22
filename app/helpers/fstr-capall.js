import Ember from 'ember';

function fstrCapall(value) {
  return value.toUpperCase();
}

export {
  fstrCapall
};

export default Ember.Handlebars.makeBoundHelper(fstrCapall);
