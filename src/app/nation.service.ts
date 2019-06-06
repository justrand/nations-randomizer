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

  /**
   * Returns an observable of random nations
   * @param amount How many random nations to get
   */
  getRandomNations(amount): Observable<Nation[]> {
    let nations = NATIONS.slice(0);
    if(amount > nations.length) {
      amount = nations.length;
    }
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
          if(current['id'] === selectedNation['excludes']) {
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
  
  getNationsByExpansion(soughtExpansion): Observable<Nation[]> {
    if(!soughtExpansion) {
      return of([]);
    }
    let nations = NATIONS.slice(0);
    let result = [];
    for(let i = 0; i < nations.length; i++) {
      if(soughtExpansion === nations[i]['expansion']) result.push(nations[i]);
    }
    return of(result);
  }
  
  /**
   * Returns a list of expansions based on the data
   * @returns Observable<String[]>
   */
  getExpansions(): Observable<String[]> {
    let nations = NATIONS.slice(0);
    let result = [];
    for(let i = 0; i < nations.length; i++) {
      let found = false;
      for(let j = 0; j < result.length; j++) {
        if(result[j] === nations[i]['expansion']) {
          found = true;
        }
      }
      if(!found) result.push(nations[i]['expansion']);
    }
    return of(result);
  }
}
