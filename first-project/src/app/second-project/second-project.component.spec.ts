import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondProjectComponent } from './second-project.component';

describe('SecondProjectComponent', () => {
  let component: SecondProjectComponent;
  let fixture: ComponentFixture<SecondProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
