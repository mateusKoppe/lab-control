import templateUrl from './tool.component.html';
import './tool.component.scss';

export const ToolComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class ToolController {
    constructor($state, ToolsService){
      'ngInject';
      this.$state = $state;
      this.ToolsService = ToolsService;
    }

    $onInit(){
      this.tool = {};
      this.ToolsService.getToolFromId(this.$state.params.id)
        .then(response => this.tool = response.data);
    }

    editTool(){
      this.formTool = angular.copy(this.tool);
      this.formToolAlertOpen = true;
    }

    editFormSubmit(tool){
      this.ToolsService.updateTool(this.tool.laboratory, tool)
        .then(response => {
          this.tool = response.data;
          this.closeForm();
        })
    }

    closeForm(){
      this.formToolAlertOpen = false;
    }
  }
};
