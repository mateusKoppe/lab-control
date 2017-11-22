import templateUrl from './laboratories-list.component.html';
import './laboratories-list.component.scss';

export const LaboratoriesListComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoriesListController {
    constructor(LaboratoriesService, $state){
      'ngInject';
      this.laboratories = false;
      this._laboratoriesService = LaboratoriesService;
      this._state = $state;
      this._loadLaboratories();
    }

    laboratoryClick(laboratory){
      this._state.go('laboratory', {id: laboratory.id});
    }

    _loadLaboratories(){
      this._laboratoriesService.getLaboratories()
        .then(laboratories => this.laboratories = laboratories.data)
        .catch(error => console.error(error));
    }
  }
};
