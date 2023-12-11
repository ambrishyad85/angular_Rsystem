import { Component } from '@angular/core';
import { StoriesServiceService } from '../Model/stories-service.service';

@Component({
  selector: 'app-view-stories',
  templateUrl: './view-stories.component.html',
  styleUrl: './view-stories.component.css'
})
export class ViewStoriesComponent {
  Allrecords1:any=[];
  Allrecords:any=[];
  searchValue:any;
  gender: any;
  page = 1;
	pageSize = 200;
	collectionSize : any ;

  constructor(private service: StoriesServiceService) {  
    // debugger 
     this.viwALLRecords();   
      
    // this.refreshCountries(this.Allrecords);
  }

      viwALLRecords()
      {
        debugger
        this.service.FetchALLRecordsTitleAndURL().subscribe(
          data=>{
            this.Allrecords=data;
            this.refreshCountries(data);
          });
          
         
      }

 
    refreshCountries(data:any[]) {
        debugger
       this.collectionSize=  data.length;
       this.Allrecords1 = data.map((Allrecords, i) => ({ id: i + 1, ...Allrecords }))
       .slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
  }
    
  
}
