import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import { ToolsListComponent } from './tools-list/tools-list.component';
import { ToolComponent } from './tool/tool.component';
import { ToolsService } from './tools.service';

export const ToolsModule = angular
  .module('tools', [
    uiRouter
  ])
  .component('toolsList', ToolsListComponent)
  .component('tool', ToolComponent)
  .service('ToolsService', ToolsService)
  .config(($stateProvider, routeCheckLogin) => {
    $stateProvider
      .state('tool', {
        url: '/tool/{id}',
        component: 'tool',
      })
  })
  .name;
