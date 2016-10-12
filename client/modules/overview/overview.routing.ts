import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './overview.component';

export const routes: Routes = [
    { path: 'overview', component: OverviewComponent }
];

export const routing = RouterModule.forChild(routes);