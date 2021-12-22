import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AppStateService} from "../../services/app-state.service";
import {AppState, SearchTemplate} from "../../models";
import {BulkData} from "../../bulk-data";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-search-template-btn',
  templateUrl: './search-template-btn.component.html',
  styleUrls: ['./search-template-btn.component.css']
})
export class SearchTemplateBtnComponent implements OnInit {

  //TODO: make more obvious names like templateSiteCaption instead of siteCaption
  @Input() template: SearchTemplate = {siteCaption: '', requestLink: ''};
  @Input() category: string = '';

  searchString$: Observable<string> | undefined;
  requestLink: any;
  model = {keyword: '', requestLink: '', siteCaption: ''};

  //form = new FormControl('')
  SearchTemplateFormGroup = new FormGroup({
    formSearchKeyword: new FormControl(''),
    formRequestLink: new FormControl(''),
    formSiteCaption: new FormControl(''),
  })


  constructor(
    private appStateService: AppStateService
  ) {
  }

  initModal() {
    this.model.siteCaption = '';
    this.model.requestLink = '';
    //console.log('INIT MODAL')
  }

  ngOnInit(): void {
    this.searchString$ = this.appStateService.getSearchString();
    //this.searchTemplateForm =''
    const sub_test = this.searchString$.subscribe(searchString => {
      this.requestLink = this.template.requestLink;
      this.model = {keyword: searchString || '', siteCaption: '', requestLink: ''};
      this.requestLink = this.requestLink.replace('{TARGET}', searchString)
      //console.log('requestLink after >>', this.requestLink)
    })
  }

  onSubmit() {
    const SearchTemplate = {
      siteCaption: this.model.siteCaption,
      requestLink: this.model.requestLink
    }
    console.warn(this.SearchTemplateFormGroup.value)
    //this.appStateService.setSearchTemplate(this.category, SearchTemplate);
  }

}
