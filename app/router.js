import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('anon');
  this.route('protected');
  this.route('admin');
  this.route('login');
});

export default Router;
