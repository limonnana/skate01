import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Skate01SharedModule } from 'app/shared/shared.module';

import { PasswordStrengthBarComponent } from './password/password-strength-bar.component';
import { RegisterComponent } from './register/register.component';
import { ActivateComponent } from './activate/activate.component';
import { PasswordComponent } from './password/password.component';
import { PasswordResetInitComponent } from './password-reset/init/password-reset-init.component';
import { PasswordResetFinishComponent } from './password-reset/finish/password-reset-finish.component';
import { SettingsComponent } from './settings/settings.component';
import { accountState } from './account.route';
import { RegisterFanComponent } from './register/register-fan/register-fan.component';
import { FanComponent } from './fan/fan.component';
import { AddImageComponent } from './add-image/add-image.component';
import { ImageCropperModule } from 'ngx-image-cropper';

@NgModule({
  imports: [ImageCropperModule, Skate01SharedModule, RouterModule.forChild(accountState)],
  declarations: [
    ActivateComponent,
    RegisterComponent,
    PasswordComponent,
    PasswordStrengthBarComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    SettingsComponent,
    RegisterFanComponent,
    FanComponent,
    AddImageComponent,
  ],
})
export class AccountModule {}
