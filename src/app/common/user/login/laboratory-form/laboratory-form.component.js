import templateUrl from './laboratory-form.component.html';

export const LaboratoryFormComponent = {
  bindings: {
    onCancel: '&',
    onSubmit: '&',
    data: '<',
  },
  transclude: false,
  templateUrl,
  controller: class LaboratoryFormController {
    constructor(AccountablesService){
      'ngInject';
      this.AccountablesService = AccountablesService;
    }

    $onInit(){
      this.accountables = false;
      this.form = angular.copy(this.data);
      this.AccountablesService.getAccountables()
        .then(response => this.accountables = response.data);
    }

    $onChange(changes){
      if(changes.data.currentValue){
        this.form = angular.copy(changes.data.currentValue);
      }
    }

    handleSubmit(){
      this.onSubmit({laboratory: this.form});
    }
  }
};
