import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KMBlogItemComponent } from './km-blog-item.component';

describe('KMBlogItemComponent', () => {
  let component: KMBlogItemComponent;
  let fixture: ComponentFixture<KMBlogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KMBlogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KMBlogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
