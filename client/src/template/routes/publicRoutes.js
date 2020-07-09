import Home from '../../layout/pages/public/Home';
import Shop from '../../layout/pages/public/Shop';
import Contact from '../../layout/pages/public/Contact';
import FAQ from '../../layout/pages/public/FAQ';
import Checkout from '../../layout/pages/public/Checkout';
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
    path: '/Shop',
  },
  ProductItemPage: {
    component: ProductItemPage,
    path: '/Products',
  },
  Contact: {
    component: Contact,
    path: '/Contact',
  },
  FAQ: {
    component: FAQ,
    path: '/FAQ',
  },
  Checkout: {
    component: Checkout,
    path: '/Checkout',
  },
  Login: {
    component: Login,
    path: '/Login',
  },
  Register: {
    component: Register,
    path: '/Register',
  },
};
