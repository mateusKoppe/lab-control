import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { LoginComponent } from './login.component';

export const LoginModule = angular
  .module('login', [
    uiRouter,
  ])
  .component('login', LoginComponent)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('login', {
        url: '/login',
        component: 'login',
      });
  })
  .name;
