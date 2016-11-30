import { DataService } from './shared/data.service';
import { UserService } from './user/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ReversePipe } from './shared/reverse.pipe';

@NgModule({

  providers: [UserService, DataService],
  declarations: [
    AppComponent,
    UserComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
