import DefautLayout from "../layouts/DefaultLayout";
import NoneLayout from "../layouts/NoneLayout";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import DefaultLayout from '../layouts/DefaultLayout';
import PricePage from '../pages/PricePage';
import BlogPage from '../pages/BlogPage';
import AdminBlogPage from '../pages/AdminBlogPage';
import AdminLayout from '../layouts/AdminLayout';
import AdminServicePage from '../pages/AdminServicePage';
import DetailsBlogPage from '../pages/DetailsBlogPage';
import LookUpPage from '../pages/LookUpPage';
import UnitLookUpPage from '../pages/UnitLookUpPage';

export const publicRoute = [
    { path: '/', element: HomePage, layout: DefautLayout },
    // { path: '/login', element: LoginPage, layout: NoneLayout },
    { path: '/tin-tuc/:id', element: DetailsBlogPage, layout: DefautLayout },
    { path: '/tin-tuc', element: BlogPage, layout: DefautLayout },
    { path: '/dich-vu', element: PricePage, layout: DefaultLayout },
    { path: '/ve-medlab-vinh-vien', element: AboutPage, layout: DefaultLayout },
    { path: '/tra-cuu', element: LookUpPage, layout: DefaultLayout },
    { path: '/don-vi-tra-cuu', element: UnitLookUpPage, layout: DefaultLayout },
    { path: '/admin/blog', element: AdminBlogPage, layout: AdminLayout },
    { path: '/admin/service', element: AdminServicePage, layout: AdminLayout },
]