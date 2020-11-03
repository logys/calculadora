import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsPanelComponent } from './operations-panel.component';

describe('OperationsPanelComponent', () => {
  let component: OperationsPanelComponent;
  let fixture: ComponentFixture<OperationsPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
