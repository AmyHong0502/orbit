import Home from './Home';
import Cme from './Cme';
import CmeAnalysis from './CmeAnalysis';
import Gst from './Gst';
import Ips from './Ips';
import Flr from './Flr';
import Sep from './Sep';
import Mpc from './Mpc';
import Rbe from './Rbe';
import Hss from './Hss';
import WsaEnlilSimulation from './WsaEnlilSimulation';
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
    name: 'CME',
    component: Cme
  },
  {
    id: 'cme-analysis',
    path: '/cme-analysis',
    name: 'CME Analysis',
    component: CmeAnalysis
  },
  {
    id: 'gst',
    path: '/gst',
    name: 'GST',
    component: Gst
  },
  {
    id: 'ips',
    path: '/ips',
    name: 'IPS',
    component: Ips
  },
  {
    id: 'flr',
    path: '/flr',
    name: 'FLR',
    component: Flr
  },
  {
    id: 'sep',
    path: '/sep',
    name: 'SEP',
    component: Sep
  },
  {
    id: 'mpc',
    path: '/mpc',
    name: 'MPC',
    component: Mpc
  },
  {
    id: 'rbe',
    path: '/rbe',
    name: 'RBE',
    component: Rbe
  },
  {
    id: 'hss',
    path: '/hss',
    name: 'HSS',
    component: Hss
  },
  {
    id: 'wsaEnlilSimulation',
    path: '/wsa-enlilsimulation',
    name: 'WSA+EnlilSimulation',
    component: WsaEnlilSimulation
  },
  {
    id: 'notifications',
    path: '/notifications',
    name: 'Notifications',
    component: Notifications
  }
];
