import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTemplateGalleryComponent } from './search-template-gallery.component';

describe('SearchTemplateGalleryComponent', () => {
  let component: SearchTemplateGalleryComponent;
  let fixture: ComponentFixture<SearchTemplateGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTemplateGalleryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTemplateGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
