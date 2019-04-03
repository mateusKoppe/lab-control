export class ToolsService {
  constructor($http, $filter, UserService){
    'ngInject';
    this.$http = $http;
    this.$filter = $filter;
    this.UserService = UserService;
  }

  saveTool(laboratory, tool){
    let dataTool = angular.copy(tool);
    dataTool.laboratory = laboratory.id;
    return this.$http.post(`${this.$filter('apiUrl')(`tools/list/${laboratory.id}`, this.UserService.getToken())}`, dataTool);
  }

  updateTool(laboratory, tool){
    let dataTool = angular.copy(tool);
    delete dataTool.laboratory;
    delete dataTool.created_at;
    delete dataTool.updated_at;
    return this.$http.put(`${this.$filter('apiUrl')(`tools/item/${dataTool.id}`, this.UserService.getToken())}`, dataTool);
  }

  deleteTool(tool){
    return this.$http.delete(`${this.$filter('apiUrl')(`tools/item/${tool.id}`, this.UserService.getToken())}`);
  }

  getToolFromId(id){
    return this.$http.get(`${this.$filter('apiUrl')(`tools/item/${id}`)}`);
  }

  getToolsByLaboratory(laboratory){
    return this.getToolsByLaboratoryId(laboratory.id);
  }

  getToolsByLaboratoryId(id){
    return this.$http.get(`${this.$filter('apiUrl')(`tools/list/${id}`)}`);
  }
}
