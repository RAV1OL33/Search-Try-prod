import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTemplateBtnComponent } from './search-template-btn.component';

describe('SearchTemplateBtnComponent', () => {
  let component: SearchTemplateBtnComponent;
  let fixture: ComponentFixture<SearchTemplateBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTemplateBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTemplateBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
