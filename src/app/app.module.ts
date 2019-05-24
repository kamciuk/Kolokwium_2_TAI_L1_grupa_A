import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KMBlogComponent } from './km-blog/km-blog.component';
import { KMBlogItemComponent } from './km-blog-item/km-blog-item.component';
import { KMBlogDetailsComponent } from './km-blog-details/km-blog-details.component';

@NgModule({
  declarations: [
    AppComponent,
    KMBlogComponent,
    KMBlogItemComponent,
    KMBlogDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
