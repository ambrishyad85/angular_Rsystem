import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InsertStoriesComponent } from './insert-stories/insert-stories.component';
import { ViewStoriesComponent } from './view-stories/view-stories.component';
import { InsertALLRecordsCahesComponent } from './insert-allrecords-cahes/insert-allrecords-cahes.component';



const routes: Routes = [ 
  { path: "Home", component: AppComponent }, 
  { path: "ViewStories", component: ViewStoriesComponent }, 
  
  
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
