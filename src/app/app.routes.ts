import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Product } from './pages/product/product';
import { Ofertas } from './pages/ofertas/ofertas';

export const routes: Routes = [
	{path: "", component: Home},
	{path: "home", component: Home},
	{path: "about", component: About},
	{path: "contact", component: Contact},
	{path: "ofertas", component: Ofertas},
	{path: "product", component: Product}
];
