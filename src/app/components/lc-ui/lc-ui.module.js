import angular from 'angular';

import { LuiInputComponent } from './lui-input/lui-input.component';
import { LuiListComponent } from './lui-list/lui-list.component';
import { LuiFloatButtonComponent } from './lui-float-button/lui-float-button.component';

export const LcUiModule = angular
  .module('lcUiModule', [
  ])
  .component('luiInput', LuiInputComponent)
  .component('luiList', LuiListComponent)
  .component('luiFloatButton', LuiFloatButtonComponent)
  .name;
