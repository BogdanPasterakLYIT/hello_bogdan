import { Injectable } from '@angular/core';
import { players } from 'src/assets/players';

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  constructor() {}

  getPlayers() {
    return players;
  }
}
