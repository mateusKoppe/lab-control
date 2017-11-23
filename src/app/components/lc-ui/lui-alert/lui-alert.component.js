import templateUrl from './lui-alert.component.html';
import './lui-alert.component.scss';

export const LuiAlertComponent = {
  bindings: {
    open: '='
  },
  transclude: true,
  templateUrl,
  controller: class LuiAlertController {
    constructor($document, $scope){
      'ngInject';
      this._document = $document;
      this._scope = $scope;
    }

    $onInit(){
      this._showing = this.open;
      this._scope.$watch('$ctrl.open', value => {
        this.showing = value;
      });
      this._listenEscKey();
    }

    set showing(showing){
      this._showing = showing;
      this.open = showing;
      this._refreshClass();
    }

    get showing(){
      return this._showing;
    }

    close(){
      this.showing = false;
    }

    _listenEscKey(){
      this._document.bind('keydown', event => {
        if(event.keyCode == 27){
          this.showing = false;
          this._scope.$apply();
        }
      });
    }

    _refreshClass(){
      this.class = {[`lui-alert--active`]: this.showing};
    }
  }
};
