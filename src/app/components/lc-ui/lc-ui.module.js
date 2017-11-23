import angular from 'angular';

import { LuiInputComponent } from './lui-input/lui-input.component';
import { LuiListComponent } from './lui-list/lui-list.component';
import { LuiFloatButtonComponent } from './lui-float-button/lui-float-button.component';
import { LuiAlertComponent } from './lui-alert/lui-alert.component';

export const LcUiModule = angular
  .module('lcUiModule', [
  ])
  .component('luiInput', LuiInputComponent)
  .component('luiList', LuiListComponent)
  .component('luiFloatButton', LuiFloatButtonComponent)
  .component('luiAlert', LuiAlertComponent)
  .name;
