import angular from 'angular';

import { LcUiModule } from './lc-ui/lc-ui.module';
import { ApiModule } from './api/api.module';

export const CommonModule = angular
  .module('common', [
    LcUiModule,
    ApiModule,
  ])
  .name;
