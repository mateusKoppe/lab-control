import templateUrl from './laboratory.component.html';
import './laboratory.component.scss';

export const LaboratoryComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoryController {
    constructor($state, $scope, LaboratoriesService, ToolsService){
      'ngInject';
      this.$state = $state;
      this.$scope = $scope;
      this.LaboratoriesService = LaboratoriesService;
      this.ToolsService = ToolsService;
    }

    $onInit(){
      this.laboratory = false;
      this._getLaboratory(this.$state.params.id);
    }

    addToolSubmit(tool){
      this.ToolsService.saveTool(this.laboratory, tool)
        .then(response => {
          this.addToolAlertOpen = false;
          this.$scope.$broadcast('addTool', tool);
          this.addToolAlertSuccess = true;
          this.addToolForm = {};
        });
    }

    _getLaboratory(id){
      this.LaboratoriesService.getLaboratory(id)
        .then(laboratory => this.laboratory = laboratory.data);
    }
  }
};
