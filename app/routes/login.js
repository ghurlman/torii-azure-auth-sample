import Ember from 'ember';

export default Ember.Route.extend({
    actions: {
        githubLogin: function() {
            this.get('session').authenticate('simple-auth-authenticator:torii', 'github-oauth2');
            return;
        }
    }
});