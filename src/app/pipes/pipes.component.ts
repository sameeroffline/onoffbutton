import { Component, OnInit, ɵsetAllowDuplicateNgModuleIdsForTest } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() {}

  
  ngOnInit(): void {
  }

  public name = "Angular Pipes";
  public message = "wellcome to angular pipes";
  public person =  {
    "Name" : "sameer",
    "age"  : '21',
    "add"  : "mettuplayam ,'641301'"   }

  num=7.726;
  day=new Date()
}
