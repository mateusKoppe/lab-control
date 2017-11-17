import angular from 'angular';

import { LoginModule } from './login/login.module';
import { UserService } from './user.service';

export const UserModule = angular
  .module('user', [
    LoginModule,
  ])
  .service('UserService', UserService)
  .name;
