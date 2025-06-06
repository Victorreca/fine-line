import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardListComponent } from '../../dashboard/dashboard-list/dashboard-list.component';

describe('DashboardListComponent', () => {
  let component: DashboardListComponent;
  let fixture: ComponentFixture<DashboardListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardListComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
