import { Route } from '@angular/router';

import { RegisterFanComponent } from '../register/register-fan/register-fan.component';

export const registerRoute: Route = {
  path: 'register',
  component: RegisterFanComponent,
  data: {
    authorities: [],
    pageTitle: 'register.title',
  },
};
