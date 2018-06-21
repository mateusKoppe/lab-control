import templateUrl from './lui-list.component.html';
import './lui-list.component.scss';

export const LuiListComponent = {
  bindings: {},
  transclude: true,
  templateUrl,
  controller: class LuiListController {
    constructor(){
      'ngInject';
    }
  }
};
