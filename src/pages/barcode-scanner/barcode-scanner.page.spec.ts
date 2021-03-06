import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HeaderNavComponentModule } from '../../app/header-nav/header-nav.module';

import { BarcodeScannerPage } from './barcode-scanner.page';

describe('BarcodeScannerPage', () => {
  let component: BarcodeScannerPage;
  let fixture: ComponentFixture<BarcodeScannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BarcodeScannerPage],
        imports: [IonicModule.forRoot(), HeaderNavComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(BarcodeScannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
