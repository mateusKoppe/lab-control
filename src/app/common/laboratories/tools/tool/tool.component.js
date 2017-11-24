import templateUrl from './tool.component.html';
import './tool.component.scss';

export const ToolComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class ToolController {
    constructor($state, ToolsService){
      'ngInject';
      this._state = $state;
      this._toolsService = ToolsService;
    }

    $onInit(){
      this.tool = {};
      this._toolsService.getToolFromId(this._state.params.id)
        .then(response => this.tool = response.data);
    }

    editTool(){
      this.formTool = angular.copy(this.tool);
      this.formToolAlertOpen = true;
    }

    formToolSubmit(){
      this._toolsService.updateTool(this.tool.laboratory, this.formTool)
        .then(response => {
          this.tool = response.data;
          this.formTool = {};
          this.closeForm();
        })
    }

    closeForm(){
      this.formTool = {};
      this.formToolAlertOpen = false;
    }
  }
};
