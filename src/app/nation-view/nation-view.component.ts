import { Component, OnInit, Input  } from '@angular/core';

import {Nation} from './../nation'

@Component({
  selector: 'app-nation-view',
  templateUrl: './nation-view.component.html',
  styleUrls: ['./nation-view.component.css']
})

export class NationViewComponent implements OnInit {

  @Input() nation: Nation;

  constructor() { }

  ngOnInit() {
  }

  
}
