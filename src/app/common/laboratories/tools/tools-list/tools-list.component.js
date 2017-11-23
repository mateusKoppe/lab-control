import templateUrl from './tools-list.component.html';

export const ToolsListComponent = {
  bindings: {
    laboratory: '<'
  },
  transclude: false,
  templateUrl,
  controller: class ToolsListController {
    constructor($scope, $state, ToolsService){
      'ngInject';
      this._toolsService = ToolsService;
      this._scope = $scope;
      this._state = $state;
    }

    $onInit(){
      this._scope.$on('addTool', (event, tool) => {
        console.log(tool);
        this.tools.push(tool);
      })
    }

    $onChanges(changes) {
      if(changes.laboratory.currentValue){
        this.laboratory = changes.laboratory.currentValue;
        this._toolsService.getToolsByLaboratory(this.laboratory)
          .then(tools => this.tools = tools.data);
      }
    };

    toolClick(tool){
      this._state.go('tool', {id: tool.id});
    }
  }
};
