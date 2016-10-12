import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'overview', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });