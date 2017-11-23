import templateUrl from './laboratory.component.html';
import './laboratory.component.scss';

export const LaboratoryComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoryController {
    constructor($state, $scope, LaboratoriesService, ToolsService){
      'ngInject';
      this._state = $state;
      this._scope = $scope;
      this._laboratoriesService = LaboratoriesService;
      this._toolsService = ToolsService;
    }

    $onInit(){
      this.laboratory = false;
      this._getLaboratory(this._state.params.id);
    }

    addToolSubmit(){
      this._toolsService.saveTool(this.laboratory, this.newTool)
        .then(response => {
          console.log(response.data);
          this.addToolAlertOpen = false;
          this._scope.$broadcast('addTool', this.newTool);
          this.addToolAlertSuccess = true;
          this.newTool = {};
        });
    }

    _getLaboratory(id){
      this._laboratoriesService.getLaboratory(id)
        .then(laboratory => this.laboratory = laboratory.data);
    }
  }
};
