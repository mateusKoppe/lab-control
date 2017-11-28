import angular from 'angular';

import { AccountablesModule } from './accountables/accountables.module';
import { UserModule } from './user/user.module';
import { LaboratoriesModule } from './laboratories/laboratories.module';

export const CommonModule = angular
  .module('common', [
    AccountablesModule,
    UserModule,
    LaboratoriesModule,
  ])
  .name;
