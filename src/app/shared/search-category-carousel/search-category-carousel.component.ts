import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {SearchCategory} from "../../models";
import {AppStateService} from "../../services/app-state.service";

@Component({
  selector: 'app-search-category-carousel',
  templateUrl: './search-category-carousel.component.html',
  styleUrls: ['./search-category-carousel.component.css']
})
export class SearchCategoryCarouselComponent implements OnInit {

  searchCategories$: Observable<SearchCategory[]> | undefined;

  constructor(
    private appStateService: AppStateService
  ) { }

  ngOnInit(): void {
    this.searchCategories$ = this.appStateService.getSearchCategories();
  }

}
