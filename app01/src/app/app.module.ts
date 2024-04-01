import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightDirective } from './highlight.directive';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { InWordsPipe } from './in-words.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DirectivesDemoComponent,
    HighlightDirective,
    PipesDemoComponent,
    InWordsPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
