import templateUrl from './accountable-form.component.html';

export const AccountableFormComponent = {
  bindings: {
    onCancel: '&',
    onSubmit: '&',
    data: '<',
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
    }

    handleSubmit(){
      this.onSubmit({accountable: this.data});
    }
  }
};
