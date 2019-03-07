import { Component } from '@angular/core';
import {NationViewComponent} from './nation-view/nation-view.component';
import {NationService} from './nation.service';
import {Nation} from './nation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nations-randomizer';

  constructor(private characterService: NationService) { }
  
  nations: Nation[];
  players: number;

  ngOnInit() {
    //this.characterService.getAllNations().subscribe(nations => this.nations = nations);
  }
  getNations(): void {
    this.characterService.getRandomNations(this.players).subscribe(nations => this.nations = nations);
  }
}
