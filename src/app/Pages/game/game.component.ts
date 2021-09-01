import { Component, OnInit } from '@angular/core';
import { Game } from '../../Classes/Game/game';
import { GameService } from '../../Services/Game/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  currentGame: Game | undefined;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.currentGame = this.getGame();
  }

  getGame() {
    return this.gameService.getRandomGame();
  }

}
