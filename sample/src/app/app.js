import angular from 'angular';

import '../style/app.scss';
import 'angular-material/angular-material.min.css'

class AppCtrl {
  constructor($filter) {
    var self = this;

    this.url = 'https://github.com/preboot/angular-webpack';

    this.header = [
      { value: 'Date', size: 15 },
      { value: 'Identificator', size: 15},
      { value: 'Submitter', size: 10},
      { value: 'Supplier', size: 25},
      { value: 'Total', size: 20},
      { value: 'Request', size: 10},
      { value: '#', size: 5}
    ];

    this.rows = [];

    this.body = function(lines) {
      for (var i = 0; i < lines; i++) {
        self.rows.push({
          date: Date.now(),
          id: Math.floor((Math.random() * 10000000)),
          submitter: 'Jonh Doe ' + (i + 1),
          supplier: 'Acme Inc ' + Math.floor((Math.random() * 100)),
          total: $filter('currency')(Math.floor((Math.random() * 10000000)), '$ '),
          request: Math.floor((Math.random() * 10000))
        })
      }
    }(25);
  }
}

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [
  require('angular-animate'),
  require('angular-material'),
  require('angular-aria'),
  require('angular-messages'),
  require('@uirouter/angularjs').default
])
  .controller('AppCtrl', AppCtrl)
  .config(require('./theme'))
  .config(require('./routes'));

export default MODULE_NAME;