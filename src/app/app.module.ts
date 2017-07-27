import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GuidService } from './guid/guid.service';
import { PipelineConfigComponent } from './pipeline-config/pipeline-config.component';
import { RebirthNGModule } from 'rebirth-ng';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PipelineConfigComponent
  ],
  imports: [
    BrowserModule,
    RebirthNGModule.forRoot(),
    RouterModule.forRoot([])
  ],
  providers: [GuidService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
