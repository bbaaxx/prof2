import Ember from 'ember';

export function tdatMonthyear(date) {
  return moment(date).format('MMM, YYYY');
}

export default Ember.Handlebars.makeBoundHelper(tdatMonthyear);
