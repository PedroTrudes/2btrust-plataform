import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { LayoutContainersModule } from './containers/layout/layout.containers.module';

//My impots testes
import { LoginComponent } from './2btrust/forms/login/login.component';
import { ApplicationsContainersModule } from './containers/applications/applications.containers.module';
import { FormsContainersModule } from './containers/forms/forms.containers.module';
import { FormValidationsContainersModule } from './containers/form-validations/form.validations.containers.module'
import {DashboardsContainersModule} from './containers/dashboards/dashboards.containers.module';
import {UiCardsContainersModule} from './containers/ui/cards/ui.cards.containers.module';
import { SinginComponent } from './2btrust/forms/singin/singin.component';
import { HeaderComponent } from './2btrust/template/header/header.component';
import { FooterComponent } from './2btrust/template/footer/footer.component';
import { NavegateComponent } from './2btrust/template/navegate/navegate.component';
import { DashboardComponent } from './2btrust/views/dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    ApplicationsContainersModule,
    FormsContainersModule,
    FormValidationsContainersModule,
    DashboardsContainersModule,
    UiCardsContainersModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SinginComponent,
    HeaderComponent,
    FooterComponent,
    NavegateComponent,
    DashboardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
