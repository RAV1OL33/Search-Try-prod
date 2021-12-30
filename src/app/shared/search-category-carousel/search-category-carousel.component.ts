import {Component, OnInit} from '@angular/core';
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
  LocalStorage_save: any;
  Outside_save: string = '';

  constructor(
    private appStateService: AppStateService
  ) {
  }

  ngOnInit(): void {
    this.searchCategories$ = this.appStateService.getSearchCategories();
  }

  //TODO:ADD 'COPY to CLIPBOARD' MODULE

  getLocalStorage() {
    let current_user_date = localStorage.getItem('user_data');
    this.LocalStorage_save = current_user_date
  }

  setLocalStorage() {
    let prev_save = localStorage.getItem('user_data');
    if (prev_save)
      localStorage.setItem('prev_user_data', prev_save)
    console.log(this.Outside_save)
    localStorage.setItem('user_data', this.Outside_save)
    this.appStateService.setNewLocalStorageSave()
    this.Outside_save=''
    this.LocalStorage_save = ''

  }
  ResetSave(){
    let prev_save = localStorage.getItem('prev_user_data');
    if (prev_save !='' && prev_save)
      localStorage.setItem('user_data', prev_save)
    this.appStateService.setNewLocalStorageSave();
  }
}
