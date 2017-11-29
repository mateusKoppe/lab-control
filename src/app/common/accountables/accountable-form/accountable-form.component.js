import templateUrl from './accountable-form.component.html';

export const AccountableFormComponent = {
  bindings: {
    onCancel: '&',
    onSubmit: '&',
    onDelete: '&',
    hasDelete: '<',
    data: '<',
    hide: '<',
  },
  transclude: false,
  templateUrl,
  controller: class AccountableFormController {
    constructor(UserService){
      'ngInject';
    }

    $onChange(changes){
      if(changes.data.currentValue){
        this.data = changes.data.currentValue;
      }
      if(changes.hide.currentValue){
        this.hide = changes.hide.currentValue;
      }
      if(changes.hasDelete.currentValue){
        this.hasDelete = changes.hasDelete.currentValue;
      }
    }

    handleSubmit(){
      this.onSubmit({accountable: this.data});
    }
  }
};
