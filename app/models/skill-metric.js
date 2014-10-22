import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    unitName: 'year',
  }, {
    id: 2,
    unitName: 'project'
  }
];

export default DS.Model.extend({

  unitName:   DS.attr('string'),
  unit:       DS.attr('number', {defaultValue: 1}),
  baseValue:  DS.attr('number', {defaultValue: 1})

}).reopenClass({FIXTURES:fixtures});
