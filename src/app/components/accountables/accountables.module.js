import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { AccountablesComponent } from './accountables.component';
import { AccountablesListComponent } from './accountables-list/accountables-list.component';
import { AccountableFormComponent } from './accountable-form/accountable-form.component';
import { AccountablesService } from './accountables.service';

export const AccountablesModule = angular
  .module('accountables', [
    uiRouter,
  ])
  .component('accountables', AccountablesComponent)
  .component('accountableForm', AccountableFormComponent)
  .component('accountablesList', AccountablesListComponent)
  .service('AccountablesService', AccountablesService)
  .config($stateProvider => {
    'ngInject';
    $stateProvider
      .state('accountables', {
        url: '/accountables',
        component: 'accountables',
      });
  })
  .name;
