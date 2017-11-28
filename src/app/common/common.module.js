import angular from 'angular';

import { AccountablesModule } from './accountables/accountables.module';
import { UserModule } from './user/user.module';
import { HomeModule } from './home/home.module';
import { LaboratoriesModule } from './laboratories/laboratories.module';

export const CommonModule = angular
  .module('common', [
    AccountablesModule,
    HomeModule,
    UserModule,
    LaboratoriesModule,
  ])
  .name;
