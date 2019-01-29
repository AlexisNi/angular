import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "../../../../../node_modules/@angular/router";

@Injectable()
export class ContainerListResolverService implements Resolve<any> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return "Everything is working fine";
  }
  constructor() {}
}
