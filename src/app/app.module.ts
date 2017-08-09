import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BootstrapComponent } from './bootstrap.component';
import { WidgetComponent } from './widget.component';
import { AboutComponent } from './about.component';

const appRoutes: Routes = [
  { path: '', component: BootstrapComponent },
  { path: 'widgets', component: WidgetComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: BootstrapComponent }
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
