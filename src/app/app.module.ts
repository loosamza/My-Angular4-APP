import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './components/user/user.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { TodoService } from './services/todo.service';
import { HttpModule }  from '@angular/http'
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes = [
  {path:"", component:UserComponent},
  {path:"about", component:AboutusComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
