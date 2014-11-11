import DS from 'ember-data';

var fixtures = [
  {
    id: 1,
    name: 'IT helpdesk engineer (Tier II)',
    tagline: 'HW/SW Helpdesk support for end-users in LATAM and the Caribbean',
    startDate: new Date('1/1/2001'),
    endDate: new Date('2/2/2002'),
    company: 1
  }, {
    id: 2,
    name: 'Network Support Engineer',
    tagline: 'Networking remote support for Cisco Systems clients around the globe',
    startDate: new Date('3/3/2003'),
    endDate: new Date('4/4/2004'),
    company: 2
  }
];

export default DS.Model.extend({

  name:           DS.attr('string'),
  tagline:        DS.attr('string'),
  startDate:      DS.attr('date'),
  endDate:        DS.attr('date'),
  company:        DS.belongsTo('company', {async:true}),
  activities:     DS.hasMany('position-activity', {async:true}),
  positionsets:   DS.hasMany('positionset', {async:true}),

  allCompanies: function(){
    return this.store.findAll('company');
  }.property(),

}).reopenClass({FIXTURES:fixtures});
