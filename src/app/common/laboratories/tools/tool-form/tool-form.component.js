import templateUrl from './tool-form.component.html';

export const ToolFormComponent = {
  bindings: {
    onCancel: '&',
    onSubmit: '&',
  },
  transclude: false,
  templateUrl,
  controller: class ToolFormController {
    constructor(){
      'ngInject';
    }

    handleSubmit(){
      this.onSubmit({tool: this.data});
    }
  }
};
