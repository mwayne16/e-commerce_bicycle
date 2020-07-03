import Home from '../../layout/pages/public/Home';
import Shop from '../../layout/pages/public/Shop';
import Contact from '../../layout/pages/public/Contact';
import FAQ from '../../layout/pages/public/FAQ';
import Checkout from '../../layout/pages/public/Checkout';
import { UserAuth } from '../../layout/pages/public/UserAuth';

export default {
  Home: {
    component: Home,
    path: '/',
  },
  Shop: {
    component: Shop,
    path: '/Shop',
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
  UserAuth: {
    component: UserAuth,
    path: '/Login',
  },
};
