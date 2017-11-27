import templateUrl from './laboratories-list.component.html';

export const LaboratoriesListComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoriesListController {
    constructor($state, $scope, LaboratoriesService){
      'ngInject';
      this.laboratories = false;
      this.$state = $state;
      this.$scope = $scope;
      this.LaboratoriesService = LaboratoriesService;
    }

    $onInit(){
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
        .then(laboratories => this.laboratories = laboratories.data)
        .catch(error => console.error(error));
    }
  }
};
