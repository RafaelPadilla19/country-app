import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryLayout } from './layouts/CountryLayout/CountryLayout';

export const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayout,
    children: [
      { path: 'by-capital', component: ByCapitalPage },
      {
        path: 'by-country',
        loadComponent: () => import('./pages/by-country-page/by-country-page')
      },
      {
        path: 'by-region',
        loadComponent: () => import('./pages/by-region-page/by-region-page')
      },
      {
        path: 'by/:code',
        loadComponent: () => import('./pages/country-page/country-page')
      },
      { path: '**', redirectTo: 'by-capital' }
    ]
  }
]

export default countryRoutes;
