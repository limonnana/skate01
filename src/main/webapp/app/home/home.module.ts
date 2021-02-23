import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Skate01SharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';
import { ImageCropperModule } from 'ngx-img-cropper';

@NgModule({
  imports: [ImageCropperModule, Skate01SharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class Skate01HomeModule {}
