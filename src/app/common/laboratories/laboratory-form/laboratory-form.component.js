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
    constructor(UserService){
      'ngInject';
      this.UserService = UserService;
    }

    $onInit(){
      this.UserService.getUsers()
        .then(response => this.users = response.data);
    }

    $onChange(changes){
      if(changes.data.currentValue){
        this.data = changes.data.currentValue;
      }
    }

    handleSubmit(){
      this.onSubmit({laboratory: this.data});
    }
  }
};
