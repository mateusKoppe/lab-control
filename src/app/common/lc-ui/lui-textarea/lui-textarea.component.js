import templateUrl from './lui-textarea.component.html';
import './lui-textarea.component.scss';

export const LuiTextareaComponent = {
  bindings: {
    type: '@',
    ngModel: '=',
    theme: '<',
  },
  transclude: true,
  templateUrl,
  controller: class LuiTextareaController {
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
      this.class = {[`lui-textarea--${this.theme}`]: true};
    }
  }
};
