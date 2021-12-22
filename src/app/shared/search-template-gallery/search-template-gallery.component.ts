import { Component, OnInit, Input } from '@angular/core';
import {Observable} from "rxjs";
import {SearchTemplate} from "../../models";
import {AppStateService} from "../../services/app-state.service";

@Component({
  selector: 'app-search-template-gallery',
  templateUrl: './search-template-gallery.component.html',
  styleUrls: ['./search-template-gallery.component.css']
})
export class SearchTemplateGalleryComponent implements OnInit {
  @Input() SearchTemplates: SearchTemplate[] = [];
  @Input() SearchCategoryTitle: string = '';
  //searchTemplates$: Observable<SearchTemplate[]>

  constructor(
    private appStateService: AppStateService
  ) { }

  ngOnInit(): void {
    //this.searchTemplates$ = this.appStateService.getSearchTemplates();
  }

}
