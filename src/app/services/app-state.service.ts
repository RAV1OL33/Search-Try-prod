import {Injectable} from '@angular/core';
import {BehaviorSubject, from, Observable} from "rxjs";
import {pluck} from "rxjs/operators";
import {AppState, SearchCategory, SearchTemplate} from "../models";
import {HttpClient} from "@angular/common/http";
import {BulkData} from "../bulk-data";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  private appState$: BehaviorSubject<AppState>;

  constructor(
    private httpClient: HttpClient
  ) {
    this.appState$ = new BehaviorSubject<AppState>(BulkData)

    //Init app state
    this.getAppState()
  }

  //TODO: Create right getter setter for appState
  private getAppState() {
    // This block create GET to some/test/url and receive <Type>? witch then set via setter
    /*
    this.httpClient.get<SearchTarget>('some/test/url').subscribe((searchTarget)=>{
      this.setSearchTarget(searchTarget);
    }),
      () =>{
      console.error('WAT DO YOU EVEN WANA FIND? Error lol')
      }
    */
    //BulkData.searchString = ''
    const simple_value = new BehaviorSubject<AppState>(BulkData)
    const test_subscribe = simple_value.subscribe((val) => {
        this.setAppState(val)
        //console.log(val)
      }
    )
  }

  private setAppState(appState: AppState) {
    this.appState$.next(appState);
    //console.log(this.appState$)
  }

  getSearchString(): Observable<string> {

    //const appState = {...this.appState$.value}
    //console.log(appState)
    //return appState.searchString

    return this.appState$.pipe(
      pluck('searchString')
    );

  }

  setSearchString(searchString: string) {
    const appState = {...this.appState$.value};
    appState.searchString = searchString;
    this.setAppState(appState)
  }

  getSearchCategories(): Observable<SearchCategory[]> {
    return this.appState$.pipe(
      pluck('searchCategories')
    );
  }

  setSearchTemplate(_currentSearchCategoryTitle: string, _newSearchTemplate: SearchTemplate) {
    const appState = {...this.appState$.value};
    appState.searchCategories.forEach(searchCategory => {
      if (searchCategory.searchCategoryTitle == _currentSearchCategoryTitle)
        searchCategory.searchTemplates.splice(searchCategory.searchTemplates.length-2,0,_newSearchTemplate)
      return;
    })
  }

}
