import {NgModule} from '@angular/core';
import {NgForageCache} from './NgForage/cache/NgForageCache.service';
import {BaseConfigurableImpl} from './NgForage/config/BaseConfigurableImpl.service';
import {NgForageConfig} from './NgForage/config/NgForageConfig.service';
import {InstanceFactory} from './NgForage/instance-factory/InstanceFactory.service';
import {NgForage} from './NgForage/main/NgForage.service';

/** @internal */
export const def: NgModule = {
  providers: [
    NgForage,
    NgForageCache,
    <any>BaseConfigurableImpl,
    NgForageConfig.provider,
    InstanceFactory.provider
  ]
};
