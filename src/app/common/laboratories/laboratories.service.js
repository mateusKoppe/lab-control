export class LaboratoriesService {
  constructor($http, UserService, $filter){
    this._http = $http;
    this._filter = $filter;
    this._userService = UserService;
    'ngInject';
  }

  getLaboratories(){
    return this._http.get(`${this._filter('apiUrl')('laboratories')}`);
  }

  getLaboratory(id){
    return this._http.get(`${this._filter('apiUrl')(`laboratories/${id}`)}`);
  }
}
