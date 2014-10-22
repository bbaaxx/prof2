import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {


  this.route('index', {path:'/'});

  this.resource('skills', function() {
    this.resource('skill', {path:'/:skill_id'}, function(){
      this.route('edit');
    });
    this.route('create');
  });

  this.resource('positions', function() {
    this.resource('position', {path:'/:position_id'}, function() {
      this.route('edit');
    });
    this.route('create');
  });

});

export default Router;
