import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostTemplateComponent } from './post-template/post-template.component';
import {Routes, RouterModule} from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PostService } from './services/post.service';
const appRoutes: Routes = [
  { path : '', component: PostsComponent },
  { path : 'post', component: PostsComponent },
  { path : 'template/:id', component: PostTemplateComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostTemplateComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule 
  ],
  providers: [
    {provide: PostService , useClass: PostService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
