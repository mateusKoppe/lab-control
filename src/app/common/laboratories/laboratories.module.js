import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { ToolsModule } from './tools/tools.module';
import { LaboratoriesListComponent } from './laboratories-list/laboratories-list.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LaboratoriesComponent } from './laboratories.component';
import { LaboratoriesService } from './laboratories.service';

export const LaboratoriesModule = angular
  .module('laboratories', [
    uiRouter,
    ToolsModule,
  ])
  .service('LaboratoriesService', LaboratoriesService)
  .component('laboratoriesList', LaboratoriesListComponent)
  .component('laboratory', LaboratoryComponent)
  .component('laboratories', LaboratoriesComponent)
  .config(($stateProvider, routeCheckLogin) => {
    'ngInject';
    $stateProvider
      .state('laboratory', {
        url: '/laboratory/{id}',
        component: 'laboratory',
      })
      .state('laboratories', {
        url: '/laboratories',
        component: 'laboratories',
      })
  })
  .name;
