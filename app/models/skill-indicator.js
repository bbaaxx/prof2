import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'development',
    metric: 1,
    value: 3
  }, {
    id: 2,
    name: 'management',
    metric: 2,
    value: 4
  }, {
    id: 3,
    name: 'support',
    metric: 1,
    value: 3
  }
];

export default DS.Model.extend({

  name:     DS.attr('string'),
  value:    DS.attr('number'),
  skill:    DS.belongsTo('skill', {async: true}),
  metric:   DS.belongsTo('skill-metric', {async: true}),

  availableMetrics: function(){
    return this.store.findAll('skill-metric');
  }.property()

}).reopenClass({FIXTURES:fixtures});
