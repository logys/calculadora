import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LcdComponent } from './lcd/lcd.component';
import { NumbersPanelComponent } from './numbers-panel/numbers-panel.component';
import { OperationsPanelComponent } from './operations-panel/operations-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LcdComponent,
    NumbersPanelComponent,
    OperationsPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
