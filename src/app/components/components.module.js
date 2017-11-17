import angular from 'angular';

import { LcUiModule } from './lc-ui/lc-ui.module';

export const ComponentsModule = angular
  .module('components', [
    LcUiModule
  ])
  .name;
