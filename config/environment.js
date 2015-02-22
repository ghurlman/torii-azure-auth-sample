/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'torii-azure-provider-sample',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  ENV['torii'] = {
    providers: {
      'github-oauth2': {
        apiKey: '312a3767e6946ec1f0bd',
        redirect_uri: "http://localhost:4200",
        state: "88e491b5-5009-4fa9-8d66-9d61bdb2007e"
      },
      'azure-oauth2': {
        apiKey: 'f24ca40c-1a64-45be-bf0a-2107da503941',
        redirect_uri: "http://localhost:4200",
        state: "88e491b5-5009-4fa9-8d66-9d61bdb2007e"
      }

    },
  }

  return ENV;
};
