import { environment } from 'src/environments/environment';
import { UserRole } from '../shared/auth.roles';
const adminRoot = environment.adminRoot;

export interface IMenuItem {
  id?: string;
  icon?: string;
  label: string;
  to: string;
  newWindow?: boolean;
  subs?: IMenuItem[];
  roles?: UserRole[];
}

const data: IMenuItem[] = [
  {
    icon: 'iconsminds-digital-drawing',
    label: 'menu.dashboards',
    to: `${adminRoot}/dashboards`,
    // roles: [UserRole.Admin, UserRole.Editor],

  },

  {
    icon: 'iconsminds-receipt-4',
    label: 'menu.pages',
    to: `${adminRoot}/pages`,

  },
  {
    icon: 'iconsminds-monitor-analytics',
    label: 'menu.portifolio',
    to: `${adminRoot}/applications`,

  },
  {
    icon: 'simple-icon-paper-plane',
    label: 'menu.invest',
    to: `${adminRoot}/ui`,

  },
  {
    icon: 'iconsminds-dollar',
    label: 'menu.transfer',
    to: `${adminRoot}/menu`,

  },
  {
    icon: 'iconsminds-add-file',
    label: 'menu.documents',
    to: `${adminRoot}/blank-page`,
    // roles: [UserRole.Editor],
  },
  {
    icon: 'iconsminds-idea',
    label: 'menu.help',
    to: `${adminRoot}/help`,
  },
];
export default data;
