import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KMBlogDetailsComponent } from './km-blog-details.component';

describe('KMBlogDetailsComponent', () => {
  let component: KMBlogDetailsComponent;
  let fixture: ComponentFixture<KMBlogDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KMBlogDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KMBlogDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
