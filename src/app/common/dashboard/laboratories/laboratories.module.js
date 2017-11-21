import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { LaboratoriesComponent } from './laboratories.component';
import { LaboratoriesService } from './laboratories.service';

export const LaboratoriesModule = angular
  .module('laboratories', [
    uiRouter,
  ])
  .service('LaboratoriesService', LaboratoriesService)
  .component('laboratories', LaboratoriesComponent)
  .name;
