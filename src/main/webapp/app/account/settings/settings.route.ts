import { Route } from '@angular/router';

import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Authority } from 'app/shared/constants/authority.constants';
import { FanComponent } from '../fan/fan.component';

export const settingsRoute: Route = {
  path: 'settings',
  component: FanComponent,
  data: {
    authorities: [Authority.USER],
    pageTitle: 'global.menu.account.settings',
  },
  canActivate: [UserRouteAccessService],
};
