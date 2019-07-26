import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BalanceFinderComponent } from './balance-finder/balance-finder.component';

const routes: Routes = [
  {
    path: '**',
    component: BalanceFinderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
