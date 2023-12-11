import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertALLRecordsCahesComponent } from './insert-allrecords-cahes.component';

describe('InsertALLRecordsCahesComponent', () => {
  let component: InsertALLRecordsCahesComponent;
  let fixture: ComponentFixture<InsertALLRecordsCahesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsertALLRecordsCahesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertALLRecordsCahesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
