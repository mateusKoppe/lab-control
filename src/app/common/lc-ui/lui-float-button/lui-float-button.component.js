import templateUrl from './lui-float-button.component.html';
import './lui-float-button.component.scss';

export const LuiFloatButtonComponent = {
  bindings: {
    theme: '<',
  },
  transclude: true,
  templateUrl,
  controller: class LuiFloatButtonController {
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
      this.class = {[`lui-float-button--${this.theme}`]: true};
    }
  }
};
