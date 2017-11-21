import templateUrl from './laboratories-list.component.html';
import './laboratories-list.component.scss';

export const LaboratoriesListComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoriesListController {
    constructor(LaboratoriesService){
      'ngInject';
      this._laboratoriesService = LaboratoriesService;
      this.laboratories = false;
      this._loadLaboratories();
    }

    laboratoryClick(laboratory){
      console.log('laboratory', laboratory);
    }

    _loadLaboratories(){
      this._laboratoriesService.getLaboratories()
        .then(laboratories => this.laboratories = laboratories.data)
        .catch(error => console.error(error));
    }
  }
};
