import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";

const routes: Routes = [
  {
    path: "containers",
    loadChildren:
      "./modules/container-list/container-list.module#ContainerListModule"
  },
  { path: "", redirectTo: "containers", pathMatch: "full" }
];

const config: ExtraOptions = {
  useHash: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
