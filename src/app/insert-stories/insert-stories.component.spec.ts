import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertStoriesComponent } from './insert-stories.component';

describe('InsertStoriesComponent', () => {
  let component: InsertStoriesComponent;
  let fixture: ComponentFixture<InsertStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertStoriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
