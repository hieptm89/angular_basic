import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { DetailComponent } from './detail/detail';
import { CreateComponent } from './create/create';

export const routes: Routes = [
    // { path: '', component: HomeComponent },
    // { path: 'detail/:id', component: DetailComponent },
    // { path: 'create', component: CreateComponent }

    // 1. Cấu hình Lazy Loading cho trang chủ Home
    {
        path: '',
        loadComponent: () =>
            import('./home/home').then((m) => m.HomeComponent),
    },

    // 2. Cấu hình Lazy Loading cho trang chi tiết Detail (Dynamic Route)
    {
        path: 'detail/:id',
        loadComponent: () =>
            import('./detail/detail').then((m) => m.DetailComponent),
    },

    // 3. Cấu hình Lazy Loading cho trang Create Product
    {
        path: 'create',
        loadComponent: () =>
            import('./create/create').then((m) => m.CreateComponent),
    },
];
