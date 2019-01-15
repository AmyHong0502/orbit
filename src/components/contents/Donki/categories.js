import Home from './Home';
import Cme from './Cme';
import CmeAnalysis from './CmeAnalysis';
import Ips from './Ips';
import Hss from './Hss';
import Notifications from './Notifications';

export default [
  {
    id: 'home',
    path: '',
    name: 'Home',
    component: Home
  },
  {
    id: 'cme',
    path: '/cme',
    name: 'Coronal Mass Ejection',
    component: Cme
  },
  {
    id: 'cme-analysis',
    path: '/cme-analysis',
    name: 'Coronal Mass Ejection Analysis',
    component: CmeAnalysis
  },
  {
    id: 'ips',
    path: '/ips',
    name: 'Interplanetary Shock',
    component: Ips
  },
  {
    id: 'hss',
    path: '/hss',
    name: 'Hight Speed Stream',
    component: Hss
  },
  {
    id: 'notifications',
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  }
];
