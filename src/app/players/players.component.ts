import { Component } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent {
  title = 'Players';
  players;

  constructor(service: PlayersService) {
    // let service = new PlayersService();
    this.players = service.getPlayers();
  }
}
