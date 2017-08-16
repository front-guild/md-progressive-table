module.exports = function($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

      'ngInject';

      $urlMatcherFactoryProvider.strictMode(false);

      $stateProvider
        .state('root', {
          url: '/',
          template: require('./app.html'),
          controller: 'AppCtrl as app',
        });

      $urlRouterProvider
        .otherwise('/')
        .when('/', '/#/');

    };
