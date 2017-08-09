import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from '@progress/kendo-angular-charts';

import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap.component';
import { WidgetComponent } from './widget.component';
import { AboutComponent } from './about.component';

 import 'hammerjs';

const appRoutes: Routes = [
  { path: '', redirectTo: '/bootstrap', pathMatch: 'full' },
  { path: 'bootstrap', component: BootstrapComponent },
  { path: 'widgets', component: WidgetComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BootstrapComponent,
    WidgetComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
