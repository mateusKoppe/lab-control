import templateUrl from './tools-list.component.html';

export const ToolsListComponent = {
  bindings: {
    laboratory: '<'
  },
  transclude: false,
  templateUrl,
  controller: class ToolsListController {
    constructor($scope, $timeout, ToolsService){
      'ngInject';
      this._toolsService = ToolsService;
    }

    $onChanges(changes) {
      if(changes.laboratory.currentValue){
        this.laboratory = changes.laboratory.currentValue;
        this._toolsService.getToolsByLaboratory(this.laboratory)
          .then(tools => this.tools = tools.data);
      }
    };
  }
};
