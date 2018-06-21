export class LaboratoriesService {
  constructor($http, UserService, $filter){
    'ngInject';
    this.$http = $http;
    this.$filter = $filter;
    this.UserService = UserService;
  }

  saveLaboratory(laboratory){
    let laboratoryData = angular.copy(laboratory);
    laboratoryData.accountable = laboratoryData.accountable.id;
    return this.$http.post(`${this.$filter('apiUrl')('laboratories', this.UserService.getToken())}`, laboratoryData);
  }

  editLaboratory(laboratory){
    let laboratoryData = angular.copy(laboratory);
    laboratoryData.accountable = laboratoryData.accountable.id;
    delete laboratoryData.created_at;
    delete laboratoryData.updated_at;
    !laboratoryData.description && delete laboratoryData.description;
    return this.$http.put(
      `${this.$filter('apiUrl')(`laboratories/${laboratoryData.id}`, this.UserService.getToken())}`,
      laboratoryData
    );
  }

  deleteLaboratory(laboratory){
    return this.$http.delete(`${this.$filter('apiUrl')(`laboratories/${laboratory.id}`, this.UserService.getToken())}`);
  }

  getLaboratories(){
    return this.$http.get(`${this.$filter('apiUrl')('laboratories')}`);
  }

  getLaboratory(id){
    return this.$http.get(`${this.$filter('apiUrl')(`laboratories/${id}`)}`);
  }
}
