import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KMBlogComponent } from './km-blog.component';

describe('KMBlogComponent', () => {
  let component: KMBlogComponent;
  let fixture: ComponentFixture<KMBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KMBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KMBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
