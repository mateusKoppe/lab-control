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
    }

    _loadUser(){
      this.UserService.getLoggedUser()
        .then(user => {
          this.user = user;
          this.hasPermission = this.user.permission <= 2;
        });
    }

    formClose(){
      this.addFormAlert = false;
      this.editFormAlert = false;
    }

    addFormOpen(){
      this.addFormAlert = true;
    }

    addFormSubmit(accountable){
      this.AccountablesService.saveAccountable(accountable)
        .then(response => {
          this.formClose();
          this.$scope.$broadcast('addAccountable', response.data);
        });
    }

    editFormOpen(){
      this.editFormAlert = true;
    }

    showFormOpen(){
      this.showFormAlert = true;
    }

    handleAccountableClick(accountable){
      this.actualAccountable = accountable;
      if (this.UserService.user) {
        this.editFormOpen();
      } else {
        this.showFormOpen();
      }
    }

    editFormSubmit(accountable){
      this.AccountablesService.editAccountable(accountable)
        .then(response => {
          this.formClose();
          this.$scope.$broadcast('editAccountable', response.data);
        });
    }

    deleteAccountable(){
      this.AccountablesService.deleteAccountable(this.actualAccountable)
        .then(() => {
          this.$scope.$broadcast('deleteAccountable', this.actualAccountable);
          this.formClose();
        });
    }
  }
};
