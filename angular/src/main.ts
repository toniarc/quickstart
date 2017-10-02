import './polyfills.ts';

import { platformBrowserDynamic } from '../node_modules/@angular/platform-browser-dynamic';
import { enableProdMode } from '../node_modules/@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
