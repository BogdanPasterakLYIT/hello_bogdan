import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { PlayersComponent } from './players/players.component';
import { PlayersService } from './players.service';

@NgModule({
  declarations: [AppComponent, ClubsComponent, PlayersComponent],
  imports: [BrowserModule],
  providers: [PlayersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
