import { Component } from '@angular/core';
import { IclsStories } from '../Model/icls-stories';
import { StoriesServiceService } from '../Model/stories-service.service';
import { Observable,Subscriber } from 'rxjs';

@Component({
  selector: 'app-insert-stories',
  templateUrl: './insert-stories.component.html',
  styleUrl: './insert-stories.component.css'
})
export class InsertStoriesComponent {

  flag:any=true;
 
  constructor(private service: StoriesServiceService) {
    
   }

  clsStories: IclsStories = {
   stories: ''
  };
  title:any;
  url:any;
  id:any;
  clickMe():any
  {
    this.flag=true;
        this.service.FetchStories().subscribe(
          data=>{this.clsStories.stories=data   
            console.log(this.clsStories.stories);   
          } );
          
        
  }

  fetchStories(item:any)
  {
        this.flag=true;
        this.service.getPostBykey(item).subscribe(
        data=>{this.id=data.id,this.title=data.title,  this.url=data.url  
          //console.log(this.returndata);   
        } );
        
  }


}
