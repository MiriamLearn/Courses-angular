// import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// import { provideServerRendering } from '@angular/platform-server';
// import { appConfig } from './app.config';

// const serverConfig: ApplicationConfig = {
//   providers: [
//     provideServerRendering(),
//   ]
// };

// export const config = mergeApplicationConfig(appConfig, serverConfig);
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { CoursesService } from '../services/CoursesS/courses.service';
import { firstValueFrom } from 'rxjs';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    CoursesService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);