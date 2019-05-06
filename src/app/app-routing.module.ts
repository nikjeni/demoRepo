import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: "login", loadChildren: "./pages/login/login.module#LoginPageModule" },
  {
    path: "complaint-form",
    loadChildren:
      "./pages/complaint-form/complaint-form.module#ComplaintFormPageModule"
  },
  {
    path: "listing",
    loadChildren: "./pages/listing/listing.module#ListingPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
