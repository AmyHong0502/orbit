import EventsComponent from './Events';
import CategoriesComponent from './Categories';
import LayersComponent from './Layers';

export default [
  {
    id: 'events',
    path: '/events',
    name: 'Events',
    component: EventsComponent
  },
  {
    id: 'categories',
    path: '/categories',
    name: 'Categories',
    component: CategoriesComponent
  },
  {
    id: 'layers',
    path: '/layers',
    name: 'Layers',
    component: LayersComponent
  }
];
