export class AccountablesService {
  constructor($http, $filter, UserService){
    'ngInject';
    this.$http = $http;
    this.$filter = $filter;
    this.UserService = UserService;
  }

  saveAccountable(accountable){
    let accountableData = angular.copy(accountable);
    return this.$http.post(`${this.$filter('apiUrl')('accountables', this.UserService.getToken())}`, accountableData);
  }

  getAccountables(){
    return this.$http.get(`${this.$filter('apiUrl')('accountables')}`);
  }
}
