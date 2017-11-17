import angular from 'angular';

import { LuiInputComponent } from './lui-input/lui-input.component';

export const LcUiModule = angular
  .module('lcUiModule', [
  ])
  .component('luiInput', LuiInputComponent)
  .name;
