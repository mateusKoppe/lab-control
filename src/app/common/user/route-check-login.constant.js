export const RouteCheckLoginConstant = (UserService, $state) => {
  if(UserService.user) return true;
  return UserService.loginSession()
    .catch(() => $state.go('home'));
};
