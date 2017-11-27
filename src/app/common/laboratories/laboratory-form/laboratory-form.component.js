import templateUrl from './laboratory-form.component.html';

export const LaboratoryFormComponent = {
  bindings: {
    onCancel: '&',
    onSubmit: '&',
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

    handleSubmit(){
      this.onSubmit({laboratory: this.data});
    }
  }
};
