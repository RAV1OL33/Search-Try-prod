import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchCategoryCarouselComponent} from './search-category-carousel/search-category-carousel.component';
import {InputFieldComponent} from './input-field/input-field.component';
import {SearchTemplateBtnComponent} from './search-template-btn/search-template-btn.component';
import {SearchTemplateGalleryComponent} from "./search-template-gallery/search-template-gallery.component";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SearchCategoryCarouselComponent,
    InputFieldComponent,
    SearchTemplateGalleryComponent,
    SearchTemplateBtnComponent
  ],
  exports: [
    SearchCategoryCarouselComponent,
    InputFieldComponent,
    SearchTemplateGalleryComponent,
    SearchTemplateBtnComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}
