import angular from 'angular';

import { ToolsListComponent } from './tools-list/tools-list.component';
import { ToolsService } from './tools.service';

export const ToolsModule = angular
  .module('tools', [
  ])
  .component('toolsList', ToolsListComponent)
  .service('ToolsService', ToolsService)
  .name;
