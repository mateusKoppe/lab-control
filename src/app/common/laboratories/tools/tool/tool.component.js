import templateUrl from './tool.component.html';
import './tool.component.scss';

export const ToolComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class ToolController {
    constructor(){
      'ngInject';
    }
  }
};
