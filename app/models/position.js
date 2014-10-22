import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    title: 'HW/SW Helpdesk support for end-users in LATAM and the Caribbean',
    positionName: 'IT helpdesk engineer (Tier II)',
    startDate: new Date('1/1/2001'),
    endDate: new Date('2/2/2002'),
    company: 1
  }, {
    id: 2,
    title: 'Networking remote support for Cisco Systems clients around the globe',
    positionName: 'Network Support Engineer',
    startDate: new Date('3/3/2003'),
    endDate: new Date('4/4/2004'),
    company: 2
  }
];

export default DS.Model.extend({

  title:          DS.attr('string'),
  positionName:   DS.attr('string'),
  startDate:      DS.attr('date'),
  endDate:        DS.attr('date'),
  positionsets:   DS.hasMany('positionset', {async:true}),
  activities:     DS.hasMany('position-activity', {async:true}),
  company:        DS.belongsTo('company', {async:true})

}).reopenClass({FIXTURES:fixtures});
