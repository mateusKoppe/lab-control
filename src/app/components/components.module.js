import angular from 'angular';

import { LcUiModule } from './lc-ui/lc-ui.module';
import { ApiModule } from './api/api.module';

export const ComponentsModule = angular
  .module('components', [
    LcUiModule,
    ApiModule,
  ])
  .name;
