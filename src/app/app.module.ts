import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'primeng/carousel';
import { SidebarModule } from 'primeng/sidebar';
import { HeaderComponent } from './components/includes/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/includes/footer/footer.component';
import { PipeModule } from './pipe/pipe.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SkeletonModule } from './shared/skeleton/skeleton.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { ConnectionServiceModule, ConnectionServiceOptions, ConnectionServiceOptionsToken } from 'ngx-connection-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    HomeComponent,
    FooterComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    PipeModule,
    CarouselModule,
    SidebarModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    SkeletonModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ToastrModule.forRoot(),
    ConnectionServiceModule
  ],

  providers: [
    {
      provide: ConnectionServiceOptionsToken,
      useValue: <ConnectionServiceOptions>{
        enableHeartbeat: true,
        heartbeatUrl: 'https://www.chromestatus.com/feature/5745543795965952',
        requestMethod: 'get',
        heartbeatInterval: 8000
      }}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
