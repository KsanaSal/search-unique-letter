import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchUniqueLetterComponent } from './search-unique-letter.component';

describe('SearchUniqueLetterComponent', () => {
  let component: SearchUniqueLetterComponent;
  let fixture: ComponentFixture<SearchUniqueLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchUniqueLetterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchUniqueLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
