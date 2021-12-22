import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategoryCarouselComponent } from './search-category-carousel.component';

describe('SearchCategoryCarouselComponent', () => {
  let component: SearchCategoryCarouselComponent;
  let fixture: ComponentFixture<SearchCategoryCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchCategoryCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
