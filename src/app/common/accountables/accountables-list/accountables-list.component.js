import templateUrl from './accountables-list.component.html';

export const AccountablesListComponent = {
  bindings: {},
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
    }

    accontableClick(accontable){
      this.$state.go('accontable', {id: accontable.id});
    }

    _loadAccountables(){
      this.AccountablesService.getAccountables()
        .then(accountables => this.accountables = accountables.data)
        .catch(error => console.error(error));
    }
  }
};
