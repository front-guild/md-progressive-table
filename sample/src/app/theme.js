module.exports = function($mdThemingProvider) {

    'ngInject';

    $mdThemingProvider
        .theme('default')
        .primaryPalette('indigo')
        .accentPalette('pink');

    $mdThemingProvider.alwaysWatchTheme(true);
};