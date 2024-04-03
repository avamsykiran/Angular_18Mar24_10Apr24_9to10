import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { HighlightDirective } from './highlight.directive';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { InWordsPipe } from './in-words.pipe';
import { NoSuchPathComponent } from './no-such-path/no-such-path.component';
import { LoanComponent } from './loan/loan.component';

const routes :Routes = [
  {path:'',pathMatch:'full',redirectTo:'/wc'},
  {path:'wc',component:WelcomeComponent},
  {path:'ddc',component:DirectivesDemoComponent},
  {path:'pdc',component:PipesDemoComponent},
  {path:'loan',component:LoanComponent},
  {path:'**',component:NoSuchPathComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DirectivesDemoComponent,
    HighlightDirective,
    PipesDemoComponent,
    InWordsPipe,
    NoSuchPathComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
