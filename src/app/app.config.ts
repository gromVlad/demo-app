import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { ApplicationConfig, isDevMode } from "@angular/core";
import { provideRouter } from "@angular/router";
import { provideStore } from "@ngrx/store";
import { routes } from './app.routes';
import { provideRouterStore, routerReducer } from '@ngrx/router-store';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      router: routerReducer,
    }),
    provideStoreDevtools({ maxAge: 20, logOnly: !isDevMode() }),
    provideEffects(),
    provideHttpClient(withInterceptors([])),
    provideRouterStore(),
  ],
};



