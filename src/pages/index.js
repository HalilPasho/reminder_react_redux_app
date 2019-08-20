import Loadable from 'react-loadable';
import PageLoader from '../components/page-loader';

export const RemindersCalendar = Loadable({
  loader: () => import('./reminders-calendar'), loading: PageLoader
});
