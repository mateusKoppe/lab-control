import templateUrl from './lui-select.component.html';
import './lui-select.component.scss';

export const LuiSelectComponent = {
  bindings: {
    type: '@',
    ngModel: '=',
    theme: '<',
    placeholder: '@',
    readonly: '<'
  },
  transclude: true,
  templateUrl,
  controller: class LuiSelectController {
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
      this.class = {[`lui-select--${this.theme}`]: true};
    }
  }
};
