export const RouteCheckLoginConstant = (UserService, $state) => {
  'ngInject';
  if(UserService.user) return true;
  return UserService.loginSession()
    .catch(() => $state.go('home'));
};
