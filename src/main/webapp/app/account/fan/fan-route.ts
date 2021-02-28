import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../core/auth/user-route-access-service';
import { Authority } from '../../shared/constants/authority.constants';
import { AddImageComponent } from '../add-image/add-image.component';

export const fanRoute: Route = {
  path: 'addFanPicture',
  component: AddImageComponent,
  data: {
    authorities: [Authority.USER],
    pageTitle: 'global.menu.account.settings',
  },
  canActivate: [UserRouteAccessService],
};
