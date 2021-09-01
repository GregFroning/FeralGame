import { Injectable } from '@angular/core';
import { Game } from '../../Classes/Game/game';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getRandomGame() {
    return new Game("http://feralmonk.io", "Test Game");
  }
}
