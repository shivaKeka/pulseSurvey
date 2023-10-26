import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import {provideHttpClient} from '@angular/common/http';
import { routes } from './app/app.routes';
import { DatePipe } from '@angular/common';

bootstrapApplication(AppComponent, {providers:[provideHttpClient(),provideRouter(routes),DatePipe]})
  .catch((err) => console.error(err));