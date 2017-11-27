import templateUrl from './laboratories.component.html';
import './laboratories.component.scss';

export const LaboratoriesComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoriesController {
    constructor(){
      'ngInject';
    }
  }
};
