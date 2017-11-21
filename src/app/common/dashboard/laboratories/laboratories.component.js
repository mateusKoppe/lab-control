import templateUrl from './laboratories.component.html';
import './laboratories.component.scss';

export const LaboratoriesComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoriesController {
    constructor(LaboratoriesService){
      'ngInject';
      this._laboratoriesService = LaboratoriesService;
      this.laboratories = false;
      this._loadLaboratories();
    }

    _loadLaboratories(){
      this._laboratoriesService.getLaboratories()
        .then(laboratories => this.laboratories = laboratories.data)
        .catch(error => console.error(error));
    }
  }
};
