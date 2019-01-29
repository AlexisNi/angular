import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContainerListComponent } from "./components/container-list/container-list.component";
import { ContainerItemComponent } from "./components/container-item/container-item.component";
import { ContainerListRoutingModule } from "./container-list-routing.module";
import { ContainerListResolverService } from "../../@core/services/container-list/container-list-resolver.service";

@NgModule({
  declarations: [ContainerListComponent, ContainerItemComponent],
  imports: [CommonModule, ContainerListRoutingModule],
  providers: [ContainerListResolverService]
})
export class ContainerListModule {}
