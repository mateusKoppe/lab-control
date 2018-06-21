import templateUrl from './laboratories-list.component.html';

export const LaboratoriesListComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoriesListController {
    constructor($state, $scope, LaboratoriesService){
      'ngInject';
      this.$state = $state;
      this.$scope = $scope;
      this.LaboratoriesService = LaboratoriesService;
    }

    $onInit(){
      this.laboratories = false;
      this._loadLaboratories();
      this.$scope.$on('addLaboratory', (event, laboratory) => {
        this.laboratories.push(laboratory);
      });
    }

    laboratoryClick(laboratory){
      this.$state.go('laboratory', {id: laboratory.id});
    }

    _loadLaboratories(){
      this.LaboratoriesService.getLaboratories()
        .then(laboratories => this.laboratories = laboratories.data);
    }
  }
};
