import templateUrl from './laboratory.component.html';
import './laboratory.component.scss';

export const LaboratoryComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoryController {
    constructor($state, $scope, LaboratoriesService, ToolsService, UserService){
      'ngInject';
      this.$state = $state;
      this.$scope = $scope;
      this.LaboratoriesService = LaboratoriesService;
      this.ToolsService = ToolsService;
      this.UserService = UserService;
    }

    $onInit(){
      this.laboratory = false;
      this.hasPermission = false;
      this._getLaboratory(this.$state.params.id);
      this._loadUser();
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

    editLaboratory(){
      this.editForm = this.laboratory;
      this.editLaboratoryAlertOpen = true;
    }

    editLaboratorySubmit(laboratory){
      this.LaboratoriesService.editLaboratory(laboratory)
        .then(response => {
          this.editLaboratoryAlertOpen = false;
          this.laboratory = response.data;
        });
    }

    deleteLaboratory(){
      this.LaboratoriesService.deleteLaboratory(this.laboratory)
        .then(response => {
          this.$state.go('laboratories');
        });
    }

    _loadUser(){
      this.UserService.getLoggedUser()
        .then(user => {
          this.user = user;
          this.hasPermission = this.laboratory.accountable == this.user.id || this.user.permission <= 2;
        });
    }

    _getLaboratory(id){
      this.LaboratoriesService.getLaboratory(id)
        .then(laboratory => this.laboratory = laboratory.data);
    }
  }
};
