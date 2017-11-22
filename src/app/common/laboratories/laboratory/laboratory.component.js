import templateUrl from './laboratory.component.html';
import './laboratory.component.scss';

export const LaboratoryComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class LaboratoryController {
    constructor($state, LaboratoriesService){
      'ngInject';
      this.laboratory = false;
      this._state = $state;
      this._laboratoriesService = LaboratoriesService;
      this._getLaboratory(this._state.params.id);
    }

    _getLaboratory(id){
      this._laboratoriesService.getLaboratory(id)
        .then(laboratory => this.laboratory = laboratory.data);
    }
  }
};
