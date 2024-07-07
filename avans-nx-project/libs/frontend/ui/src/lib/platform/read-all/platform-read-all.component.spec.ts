import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlatformReadAllComponent } from './platform-read-all.component';

describe('PlatformReadAllComponent', () => {
  let component: PlatformReadAllComponent;
  let fixture: ComponentFixture<PlatformReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlatformReadAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlatformReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
