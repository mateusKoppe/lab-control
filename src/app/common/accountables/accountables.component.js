import templateUrl from './accountables.component.html';
import './accountables.component.scss';

export const AccountablesComponent = {
  bindings: {},
  transclude: false,
  templateUrl,
  controller: class AccountablesController {
    constructor($scope, AccountablesService, UserService){
      'ngInject';
      this.$scope = $scope;
      this.AccountablesService = AccountablesService;
      this.UserService = UserService;
    }

    $onInit(){
      this.accountables = false;
      this.user = false;
      this._loadUser();
      this.AccountablesService.getAccountables()
        .then(response => {
          this.accountables = response.data;
        });
    }

    _loadUser(){
      this.UserService.getLoggedUser()
        .then(user => {
          this.user = user;
          this.hasPermission = this.user.permission <= 2;
        });
    }

    addFormOpen(){
      this.addFormAlert = true;
    }

    addFormClose(){
      this.addFormAlert = false;
    }

    createAccountable(accountable){
      this.AccountablesService.saveAccountable(accountable)
        .then(response => {
          this.addFormClose();
          this.$scope.$broadcast('addAccountable', response.data);
        })
    }
  }
};
