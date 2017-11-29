import templateUrl from './accountables-list.component.html';

export const AccountablesListComponent = {
  bindings: {
    onClick: '&',
  },
  transclude: false,
  templateUrl,
  controller: class AccountablesListController {
    constructor($state, $scope, AccountablesService){
      'ngInject';
      this.$state = $state;
      this.$scope = $scope;
      this.AccountablesService = AccountablesService;
    }

    $onInit(){
      this.accountables = false;
      this._loadAccountables();
      this.$scope.$on('addAccountable', (event, accountable) => {
        this.accountables.push(accountable);
      });
      this.$scope.$on('deleteAccountable', (event, removedAccountable) => {
        this.accountables = this.accountables.filter(accountable => accountable.id != removedAccountable.id)
      });
    }

    accountableClick(accountable){
      this.onClick({accountable});
    }

    _loadAccountables(){
      this.AccountablesService.getAccountables()
        .then(accountables => this.accountables = accountables.data)
        .catch(error => console.error(error));
    }
  }
};
