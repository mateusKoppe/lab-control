import templateUrl from './laboratories.component.html';
import './laboratories.component.scss';

export const LaboratoriesComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoriesController {
    constructor($scope, UserService, LaboratoriesService){
      'ngInject';
      this.$scope = $scope;
      this.LaboratoriesService = LaboratoriesService;
      this.UserService = UserService;
    }

    $onInit(){
      this.addFormAlert = false;
      this.user = false;
      this._loadUser();
    }

    _loadUser(){
      this.UserService.getLoggedUser()
        .then(user => this.user = user)
        .then(console.log);
    }

    addFormOpen(){
      this.addFormAlert = true;
    }

    addFormClose(){
      this.addFormAlert = false;
    }

    createLaboratory(laboratory){
      this.LaboratoriesService.saveLaboratory(laboratory)
        .then(response => {
          this.addFormClose();
          this.$scope.$broadcast('addLaboratory', response.data);
        })
    }
  }
};
