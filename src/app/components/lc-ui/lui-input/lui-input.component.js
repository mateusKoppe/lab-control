import templateUrl from './lui-input.component.html';
import './lui-input.component.scss';

export const LuiInputComponent = {
  bindings: {
    type: '@',
    ngModel: '=',
    theme: '=',
  },
  transclude: true,
  templateUrl,
  controller: class LuiInputController {
    constructor($scope){
      'ngInject';
      this.class = {};
      this.scope = $scope;
      this.scope.$watch('this.theme', (value) => {
        this.class = {
          [`lui-input--${this.theme}`]: true
        };
      });
    }
  }
};
