import 'hammerjs';
import { enableProdMode} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'bulma/css/bulma.css'
import {FormsModule} from '@angular/forms';

if (environment.production) {
  enableProdMode();
}






platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
