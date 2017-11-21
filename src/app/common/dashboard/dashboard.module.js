import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { LaboratoriesModule } from './laboratories/laboratories.module';

import { DashboardComponent } from './dashboard.component';

export const DashboardModule = angular
  .module('dashboard', [
    uiRouter,
    LaboratoriesModule,
  ])
  .component('dashboard', DashboardComponent)
  .config(($stateProvider, routeCheckLogin) => {
    'ngInject';
    $stateProvider
      .state('dashboard', {
        url: '/dashboard',
        component: 'dashboard',
        resolve: {
          checkLogin: routeCheckLogin
        }
      });
  })
  .name;
