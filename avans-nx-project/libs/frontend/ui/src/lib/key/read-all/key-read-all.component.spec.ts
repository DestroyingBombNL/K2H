import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KeyReadAllComponent } from './key-read-all.component';

describe('KeyReadAllComponent', () => {
  let component: KeyReadAllComponent;
  let fixture: ComponentFixture<KeyReadAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyReadAllComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(KeyReadAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
