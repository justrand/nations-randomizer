import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import {Nation} from './nation';
import {NATIONS} from './nations-data';

@Injectable({
  providedIn: 'root'
})
export class NationService {

  constructor() { }
  getAllNations(): Observable<Nation[]> {
    return of(NATIONS);
  }

  getRandomNations(amount): Observable<Nation[]> {
    
    let nations = NATIONS.slice(0);
    let selection = [];
    for(let i = 0; i < amount; i++) {
      let randomIndex = Math.floor(Math.random() * nations.length);
      let selectedNation = nations[randomIndex];
      let subdeck = nations.slice(randomIndex+1, nations.length);
      nations.splice(randomIndex, (nations.length-randomIndex));
      nations = nations.concat(subdeck);

      //remove duplicates
      for(let j = 0; j < nations.length; j++) {
          let current = nations[j];
          if(current['id'] === selectedNation['id']) {
            let endArray = nations.slice(j+1, nations.length);
            nations.splice(j, (nations.length-j));
            nations = nations.concat(endArray);
            break;
          }
      }
      selection.push(selectedNation);
    }
    return of(selection);
  }
  
}
