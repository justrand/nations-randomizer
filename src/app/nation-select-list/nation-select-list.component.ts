import { Component, OnInit, Input } from '@angular/core';
import {Nation} from './../nation';
import {NationService} from './../nation.service';

@Component({
  selector: 'app-nation-select-list',
  templateUrl: './nation-select-list.component.html',
  styleUrls: ['./nation-select-list.component.css']
})
export class NationSelectListComponent implements OnInit {

  @Input() nationService: NationService
  constructor() { }

  ngOnInit() {
  }

}
