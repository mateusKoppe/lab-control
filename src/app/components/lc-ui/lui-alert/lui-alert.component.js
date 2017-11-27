import templateUrl from './lui-alert.component.html';
import './lui-alert.component.scss';

export const LuiAlertComponent = {
  bindings: {
    open: '='
  },
  transclude: true,
  templateUrl,
  controller: class LuiAlertController {
    constructor($document, $scope, $timeout){
      'ngInject';
      this.$document = $document;
      this.$scope = $scope;
      this.$timeout = $timeout;
    }

    $onInit(){
      this._showing = this.open;
      this.$scope.$watch('$ctrl.open', value => {
        this.toggleAlert();
      });
      this.printElement = this.open;
    }

    set showing(showing){
      this._showing = showing;
      this.open = showing;
    }

    get showing(){
      return this._showing;
    }

    toggleAlert(){
      if(this.open){
        this.openAlert();
      } else {
        this.closeAlert();
      }
    }

    openAlert(){
      this.printElement = true;
      this.showing = true;
      this.$timeout(() => this._refreshClass(), 10);
      this._listenEscKey();
    }

    closeAlert(){
      this.showing = false;
      this._refreshClass();
      this.$timeout(() => this.printElement = false, 300);
      this._unlistenEscKey();
    }

    _listenEscKey(){
      this.$document.bind('keydown', event => {
        if(event.keyCode == 27){
          this.showing = false;
          this.$scope.$apply();
        }
      });
    }

    _unlistenEscKey(){
      this.$document.unbind('keydown');
    }

    _refreshClass(){
      this.class = {[`lui-alert--active`]: this.showing};
    }
  }
};
