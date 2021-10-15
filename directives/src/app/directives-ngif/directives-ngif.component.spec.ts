import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesNgifComponent } from './directives-ngif.component';

describe('DirectivesNgifComponent', () => {
  let component: DirectivesNgifComponent;
  let fixture: ComponentFixture<DirectivesNgifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesNgifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesNgifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
