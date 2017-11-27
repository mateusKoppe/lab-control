import templateUrl from './laboratories.component.html';
import './laboratories.component.scss';

export const LaboratoriesComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoriesController {
    constructor($scope, LaboratoriesService){
      'ngInject';
      this.$scope = $scope;
      this.LaboratoriesService = LaboratoriesService;
    }

    $onInit(){
      this.addFormAlert = false;
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
