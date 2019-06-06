import {Component} from '@angular/core';
import {NationViewComponent} from './nation-view/nation-view.component';
import {NationService} from './nation.service';
import {Nation} from './nation';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nations-randomizer';
  options: FormGroup;
  
  constructor(private nationsService: NationService, fb: FormBuilder) { 
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }
  
  nations: Nation[];
  allNations: Nation[];
  players: number;

  ngOnInit() {
    //this.nationsService.getAllNations().subscribe(nations => this.nations = nations);
  }

  getNations(): void {
    this.nationsService.getRandomNations(this.players).subscribe(nations => this.nations = nations);
  }

  getAllNations(): void {
    this.nationsService.getAllNations().subscribe(allNations => this.allNations = allNations);
  }
}
