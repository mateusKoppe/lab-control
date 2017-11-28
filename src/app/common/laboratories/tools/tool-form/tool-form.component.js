import templateUrl from './tool-form.component.html';

export const ToolFormComponent = {
  bindings: {
    onCancel: '&',
    onSubmit: '&',
    data: '<'
  },
  transclude: false,
  templateUrl,
  controller: class ToolFormController {
    constructor(){
      'ngInject';
    }

    $onChange(changes){
      if(changes.data.currentValue){
        this.data = changes.data.currentValue;
      }
    }

    handleSubmit(){
      this.onSubmit({tool: this.data});
    }
  }
};
