import Home from '../../layout/pages/public/Home';
import Shop from '../../layout/pages/public/Shop';
import Contact from '../../layout/pages/public/Contact';
import FAQ from '../../layout/pages/public/FAQ';
import Checkout from '../../layout/pages/public/Checkout';
import { Blog, Post } from '../../layout/pages/public/Blog';
import { Login, Register } from '../../layout/pages/public/UserAuth';
import ProductItemPage from '../../components/ProductItemPage';

export default {
  Home: {
    component: Home,
    path: '/',
    exact: true,
  },
  Shop: {
    component: Shop,
    path: '/shop',
  },
  ProductItemPage: {
    component: ProductItemPage,
    path: '/products',
  },
  Contact: {
    component: Contact,
    path: '/contact',
  },
  FAQ: {
    component: FAQ,
    path: '/faq',
  },
  Checkout: {
    component: Checkout,
    path: '/checkout',
  },
  Login: {
    component: Login,
    path: '/login',
  },
  Register: {
    component: Register,
    path: '/register',
  },
  Blog: {
    component: Blog,
    path: '/blog',
  },
  Post: {
    component: Post,
    path: '/blog/post/:postid',
  },
};
