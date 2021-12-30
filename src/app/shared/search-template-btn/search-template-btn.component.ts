import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {AppStateService} from "../../services/app-state.service";
import {AppState, SearchTemplate} from "../../models";
import {BulkData} from "../../bulk-data";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-search-template-btn',
  templateUrl: './search-template-btn.component.html',
  styleUrls: ['./search-template-btn.component.css']
})
export class SearchTemplateBtnComponent implements OnInit {

  //TODO: make more obvious names like templateSiteCaption instead of siteCaption
  @Input() template: SearchTemplate = {id: 0, siteCaption: '', requestLink: ''};
  @Input() category: string = '';

  searchString$: Observable<string> | undefined;
  requestLink: any;
  isEdit = false;
  /*
    SearchTemplateFormGroup = new FormGroup({
      formSearchKeyword: new FormControl(''),
      formRequestLink: new FormControl(''),
      formSiteCaption: new FormControl(''),
    })
    signupForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required, Validators.minLength(6)
      ]),
    });
   */

  SearchTemplateFormGroup = this.fb.group({
    formSearchKeyword: ['', Validators.required],
    formRequestLink: ['', Validators.required],
    formSiteCaption: ['', Validators.required],
  })


  constructor(
    private appStateService: AppStateService,
    private fb: FormBuilder
  ) {

  }

  parseSearchString(_keyword: string, _searchString: string) {
    _searchString = _searchString.replace(new RegExp(_keyword,'g'), '{TARGET}')
    return _searchString;
  }


  initModal(currentTemplate?: SearchTemplate) {
    if (currentTemplate) {
      this.isEdit = true;
      this.SearchTemplateFormGroup.patchValue({
        formRequestLink: currentTemplate.requestLink,
        formSiteCaption: currentTemplate.siteCaption,
      })
    } else {
      this.isEdit = false;
      this.SearchTemplateFormGroup.patchValue({
        formRequestLink: '',
        formSiteCaption: '',
      })
    }
  }

  ngOnInit(): void {
    this.searchString$ = this.appStateService.getSearchString();
    //this.searchTemplateForm =''
    const sub_test = this.searchString$.subscribe(searchString => {
      this.requestLink = this.template.requestLink;
      this.SearchTemplateFormGroup.patchValue({
        formSearchKeyword: searchString || '',
        //formRequestLink: this.template.requestLink,
        //formSiteCaption: '',
      })
      //this.model = {keyword: searchString || '', siteCaption: '', requestLink: ''};
      this.requestLink = this.requestLink.replace(/{TARGET}/g, searchString)
      //console.log('requestLink after >>', this.requestLink)
    })
  }

  deleteSearchTemplate(currentTemplate: SearchTemplate) {
    console.log(this.category, this.template.id)
    this.appStateService.deleteSearchTemplate(this.category, this.template.id);
  }

  onSubmit() {
    if (this.isEdit) {
      this.isEdit = false;
      const _newSearchTemplate = {
        id: this.template.id,
        siteCaption: this.SearchTemplateFormGroup.value.formSiteCaption,
        requestLink: this.SearchTemplateFormGroup.value.formRequestLink
      }
      console.log('Edit search template >>> ', _newSearchTemplate)
      this.appStateService.setSearchTemplate(this.category, _newSearchTemplate, this.template.id);
    } else {
      const _newSearchTemplate = {
        id: this.appStateService.getNewTemplateId(this.category),
        siteCaption: this.SearchTemplateFormGroup.value.formSiteCaption,
        requestLink: this.parseSearchString(this.SearchTemplateFormGroup.value.formSearchKeyword, this.SearchTemplateFormGroup.value.formRequestLink)
      }
      console.log('Add new search template >>> ', _newSearchTemplate)
      this.appStateService.setSearchTemplate(this.category, _newSearchTemplate);
    }

  }

}
