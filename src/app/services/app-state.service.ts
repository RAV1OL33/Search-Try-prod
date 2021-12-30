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
    console.warn('> getAppState')

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
    let json_data = localStorage.getItem('user_data') || ''
    const simple_value = new BehaviorSubject<AppState>(BulkData)
    console.log('> getAppState JSON Result:', json_data)
    const response = json_data == '' ? BulkData : JSON.parse(json_data)
    const simple_JSON = new BehaviorSubject<AppState>(response)
    console.warn()
    /*const test_subscribe = simple_value.subscribe((val) => {
        this.setAppState(val)
        //console.log(val)
      }
    )*/
    const simple_JSON_subscribe = simple_JSON.subscribe((val) => {
        this.setAppState(val)
        this.setSearchString('')
        //console.log(val)
      }
    )
  }

  private setAppState(appState: AppState) {
    this.appState$.next(appState);
    console.log("SET APP STATE >", this.appState$)
    localStorage.setItem('user_data', JSON.stringify(appState))
  }
setNewLocalStorageSave(){
    this.getAppState()
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

  setSearchTemplate(_currentSearchCategoryTitle: string, _newSearchTemplate: SearchTemplate, updatedTemplateId?: number) {
    const appState = {...this.appState$.value};
    let category = appState.searchCategories.find(category => category.searchCategoryTitle === _currentSearchCategoryTitle)
    if (category)
      if (updatedTemplateId) {
        let target_template = category.searchTemplates.find(template => template.id === updatedTemplateId)
        target_template && category.searchTemplates.splice(category.searchTemplates.indexOf(target_template), 1, _newSearchTemplate)
      } else {
        category.searchTemplates.splice(category.searchTemplates.length - 1, 0, _newSearchTemplate)
      }
    this.setAppState(appState)
  }
  deleteSearchTemplate(_currentSearchCategoryTitle: string, _templateId: number){
    const appState = {...this.appState$.value};
    let category = appState.searchCategories.find(category => category.searchCategoryTitle === _currentSearchCategoryTitle)
    if (category)
      if (_templateId) {
        let target_template = category.searchTemplates.find(template => template.id === _templateId)
        target_template && category.searchTemplates.splice(category.searchTemplates.indexOf(target_template), 1)
      }
    this.setAppState(appState)
  }
  getNewTemplateId(_currentSearchCategoryTitle: string) {
    const appState = {...this.appState$.value};
    let curr_id = 0;
    appState.searchCategories.forEach(searchCategory => {
      if (searchCategory.searchCategoryTitle == _currentSearchCategoryTitle)
        curr_id = searchCategory.searchTemplates[searchCategory.searchTemplates.length - 2].id
      return;
    })
    return curr_id + 1;
  }
}
