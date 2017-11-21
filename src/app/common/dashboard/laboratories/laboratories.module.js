import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { LaboratoriesListComponent } from './laboratories-list/laboratories-list.component';
import { LaboratoriesService } from './laboratories.service';

export const LaboratoriesModule = angular
  .module('laboratories', [
    uiRouter,
  ])
  .service('LaboratoriesService', LaboratoriesService)
  .component('laboratoriesList', LaboratoriesListComponent)
  .name;
