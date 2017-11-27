import templateUrl from './laboratory-form.component.html';

export const LaboratoryFormComponent = {
  bindings: {
    onCancel: '&',
    onSubmit: '&',
  },
  transclude: false,
  templateUrl,
  controller: class LaboratoryFormController {
    constructor(){
      'ngInject';
    }

    handleSubmit(){
      this.onSubmit({laboratory: this.data});
    }
  }
};
