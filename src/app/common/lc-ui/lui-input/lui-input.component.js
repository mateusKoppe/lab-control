import templateUrl from './lui-input.component.html';
import './lui-input.component.scss';

export const LuiInputComponent = {
  bindings: {
    type: '@',
    ngModel: '=',
    theme: '<',
    readonly: '<'
  },
  transclude: true,
  templateUrl,
  controller: class LuiInputController {
    constructor(){
      'ngInject';
      this.class = {};
    }

    $onChanges(change){
      if(change.theme.currentValue){
        this.theme = change.theme.currentValue;
        this._refreshClass();
      }
    }

    _refreshClass(){
      this.class = {[`lui-input--${this.theme}`]: true};
    }
  }
};
