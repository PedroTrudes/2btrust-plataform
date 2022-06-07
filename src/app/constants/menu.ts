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
    subs: [
      {
        label: 'menu.authorization',
        to: '/user',
        // roles: [UserRole.Editor],
        subs: [
          {
            icon: 'simple-icon-user-following',
            label: 'menu.login',
            to: '/user/login',
            newWindow: true,
          },
          {
            icon: 'simple-icon-user-follow',
            label: 'menu.register',
            to: '/user/register',
            newWindow: true,
          },
          {
            icon: 'simple-icon-user-unfollow',
            label: 'menu.forgot-password',
            to: '/user/forgot-password',
            newWindow: true,
          },
          {
            icon: 'simple-icon-user-following',
            label: 'menu.reset-password',
            to: '/user/reset-password',
            newWindow: true,
          },
        ],
      },
      {
        label: 'menu.product',
        to: `${adminRoot}/pages/product`,
        subs: [
          {
            icon: 'simple-icon-credit-card',
            label: 'menu.data-list',
            to: `${adminRoot}/pages/product/data-list`,
          },
          {
            icon: 'simple-icon-list',
            label: 'menu.thumb-list',
            to: `${adminRoot}/pages/product/thumb-list`,
          },
          {
            icon: 'simple-icon-grid',
            label: 'menu.image-list',
            to: `${adminRoot}/pages/product/image-list`,
          },
          {
            icon: 'simple-icon-picture',
            label: 'menu.details',
            to: `${adminRoot}/pages/product/details`,
          },
          {
            icon: 'simple-icon-book-open',
            label: 'menu.details-alt',
            to: `${adminRoot}/pages/product/details-alt`,
          },
        ],
      },
      {
        label: 'menu.profile',
        to: `${adminRoot}/pages/profile`,
        subs: [
          {
            icon: 'simple-icon-share',
            label: 'menu.social',
            to: `${adminRoot}/pages/profile/social`,
          },
          {
            icon: 'simple-icon-link',
            label: 'menu.portfolio',
            to: `${adminRoot}/pages/profile/portfolio`,
          },
        ],
      },
      {
        label: 'menu.blog',
        to: `${adminRoot}/pages/blog`,
        subs: [
          {
            icon: 'simple-icon-share',
            label: 'menu.blog-list',
            to: `${adminRoot}/pages/blog/blog-list`,
          },
          {
            icon: 'simple-icon-link',
            label: 'menu.blog-detail',
            to: `${adminRoot}/pages/blog/blog-detail`,
          },
        ],
      },
      {
        label: 'menu.miscellaneous',
        to: `${adminRoot}/pages/miscellaneous`,
        subs: [
          {
            icon: 'simple-icon-question',
            label: 'menu.faq',
            to: `${adminRoot}/pages/miscellaneous/faq`,
          },
          {
            icon: 'simple-icon-graduation',
            label: 'menu.knowledge-base',
            to: `${adminRoot}/pages/miscellaneous/knowledge-base`,
          },

          {
            icon: 'simple-icon-diamond',
            label: 'menu.prices',
            to: `${adminRoot}/pages/miscellaneous/prices`,
          },
          {
            icon: 'simple-icon-magnifier',
            label: 'menu.search',
            to: `${adminRoot}/pages/miscellaneous/search`,
          },
          {
            icon: 'simple-icon-envelope-open',
            label: 'menu.mailing',
            to: `${adminRoot}/pages/miscellaneous/mailing`,
          },
          {
            icon: 'simple-icon-bag',
            label: 'menu.invoice',
            to: `${adminRoot}/pages/miscellaneous/invoice`,
          },

          {
            icon: 'simple-icon-exclamation',
            label: 'menu.error',
            to: '/error',
            newWindow: true,
          },
        ],
      },
    ],
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
];
export default data;
