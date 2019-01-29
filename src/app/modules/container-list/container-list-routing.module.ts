import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContainerListComponent } from "./components/container-list/container-list.component";
import { ContainerListResolverService } from "../../@core/services/container-list/container-list-resolver.service";

const routes: Routes = [
  {
    path: "",
    component: ContainerListComponent,
    resolve: {
      containerList: ContainerListResolverService
    }
  },
  { path: "", redirectTo: "", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerListRoutingModule {}
