export class LaboratoriesService {
  constructor($http, UserService, $filter){
    this.$http = $http;
    this.$filter = $filter;
    this.UserService = UserService;
    'ngInject';
  }

  saveLaboratory(laboratory){
    const laboratoryData = angular.copy(laboratory);
    return this.$http.post(`${this.$filter('apiUrl')('laboratories', this.UserService.getToken())}`, laboratoryData);
  }

  getLaboratories(){
    return this.$http.get(`${this.$filter('apiUrl')('laboratories')}`);
  }

  getLaboratory(id){
    return this.$http.get(`${this.$filter('apiUrl')(`laboratories/${id}`)}`);
  }
}
