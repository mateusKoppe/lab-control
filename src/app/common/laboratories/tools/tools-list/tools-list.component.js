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
      this.$scope = $scope;
      this.$state = $state;
      this.ToolsService = ToolsService;
    }

    $onInit(){
      this.$scope.$on('addTool', (event, tool) => {
        this.tools.push(tool);
      })
    }

    $onChanges(changes) {
      if(changes.laboratory.currentValue){
        if(this.laboratory.id != changes.laboratory.currentValue.id){
          this.ToolsService.getToolsByLaboratory(this.laboratory)
          .then(tools => this.tools = tools.data);
        }
        this.laboratory = changes.laboratory.currentValue;
      }
    };

    toolClick(tool){
      this.$state.go('tool', {id: tool.id});
    }
  }
};
