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
    id: 'gst',
    path: '/gst',
    name: 'Geomagnetic Storm',
    component: Gst
  },
  {
    id: 'ips',
    path: '/ips',
    name: 'Interplanetary Shock',
    component: Ips
  },
  {
    id: 'flr',
    path: '/flr',
    name: 'Solar Flare',
    component: Flr
  },
  {
    id: 'sep',
    path: '/sep',
    name: 'Solar Energetic Particle',
    component: Sep
  },
  {
    id: 'mpc',
    path: '/mpc',
    name: 'Magnetopause Crossing',
    component: Mpc
  },
  {
    id: 'rbe',
    path: '/rbe',
    name: 'Radiation Belt Enhancement',
    component: Rbe
  },
  {
    id: 'hss',
    path: '/hss',
    name: 'Hight Speed Stream',
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
