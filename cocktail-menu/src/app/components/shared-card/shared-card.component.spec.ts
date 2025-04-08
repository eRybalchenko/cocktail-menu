import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SharedCardComponent } from './shared-card.component';

describe('SharedCardComponent', () => {
  let component: SharedCardComponent;
  let fixture: ComponentFixture<SharedCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SharedCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SharedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
