import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Skate01SharedModule } from 'app/shared/shared.module';
import { Skate01CoreModule } from 'app/core/core.module';
import { Skate01AppRoutingModule } from './app-routing.module';
import { Skate01HomeModule } from './home/home.module';
import { Skate01EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Skate01SharedModule,
    Skate01CoreModule,
    Skate01HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Skate01EntityModule,
    Skate01AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent],
})
export class Skate01AppModule {}
