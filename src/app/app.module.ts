import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewStoriesComponent } from './view-stories/view-stories.component';
import { FormsModule } from '@angular/forms';
import { StoriesServiceService } from './Service/stories-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SearchRecodsPipePipe } from './search-recods-pipe.pipe';
import { NgbAccordionModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
 
@NgModule({
  declarations: [
    AppComponent,
    ViewStoriesComponent,
    SearchRecodsPipePipe
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    NgbAccordionModule 
  ],
  providers: [
    StoriesServiceService],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
