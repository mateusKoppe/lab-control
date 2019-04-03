import templateUrl from './accountable-form.component.html';

export const AccountableFormComponent = {
  bindings: {
    onCancel: '&',
    onSubmit: '&',
    onDelete: '&',
    hasDelete: '<',
    data: '<',
    hide: '<',
    readonly: '<'
  },
  transclude: false,
  templateUrl,
  controller: class AccountableFormController {
    constructor(){
      'ngInject';
    }

    $onInit(){
      this.form = angular.copy(this.data);
    }

    $onChange(changes){
      if(changes.data.currentValue){
        this.data = angular.copy(changes.form.currentValue);
      }
      if(changes.hide.currentValue){
        this.hide = changes.hide.currentValue;
      }
      if(changes.hasDelete.currentValue){
        this.hasDelete = changes.hasDelete.currentValue;
      }
    }

    handleSubmit(){
      this.onSubmit({accountable: this.form});
    }
  }
};
