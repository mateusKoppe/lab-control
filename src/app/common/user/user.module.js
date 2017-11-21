import angular from 'angular';

import { LoginModule } from './login/login.module';
import { UserService } from './user.service';
import { RouteCheckLoginConstant } from './route-check-login.constant';

export const UserModule = angular
  .module('user', [
    LoginModule,
  ])
  .service('UserService', UserService)
  .constant('routeCheckLogin', RouteCheckLoginConstant)
  .name;
