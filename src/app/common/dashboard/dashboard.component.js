import templateUrl from './dashboard.component.html';
import './dashboard.component.scss';

export const DashboardComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class DashboardController {
    constructor(){
      'ngInject';
    }
  }
};
