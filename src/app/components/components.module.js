import angular from 'angular';

import { AccountablesModule } from './accountables/accountables.module';
import { UserModule } from './user/user.module';
import { LaboratoriesModule } from './laboratories/laboratories.module';

export const ComponentsModule = angular
  .module('components', [
    AccountablesModule,
    UserModule,
    LaboratoriesModule,
  ])
  .name;
