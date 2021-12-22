import { Component, OnInit } from '@angular/core';
import {AppStateService} from "../../services/app-state.service";

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {

  constructor(
    private appStateService: AppStateService
  ) { }

  ngOnInit(): void {
  }

  passSearchStringToSiblings(searchString: string){
    //console.log('>>>>>>>>>>>>>>>>>>>>>>', searchString)
    this.appStateService.setSearchString(searchString)
  }
}
