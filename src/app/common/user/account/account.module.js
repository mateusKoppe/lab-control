import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { AccountComponent } from './account.component';

export const AccountModule = angular
  .module('account', [
    uiRouter,
  ])
  .component('account', AccountComponent)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('account', {
        url: '/account',
        component: 'account',
      });
  })
  .name;
