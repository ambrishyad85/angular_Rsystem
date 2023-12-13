import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewStoriesComponent } from './view-stories/view-stories.component';



const routes: Routes = [  
  { path: "ViewStories",component: ViewStoriesComponent }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
