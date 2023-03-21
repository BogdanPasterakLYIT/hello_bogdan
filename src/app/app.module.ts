import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { PlayersComponent } from './players/players.component';
import { PlayersService } from './players.service';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    PlayersComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [PlayersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
