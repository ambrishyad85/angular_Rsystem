import { Component } from '@angular/core';
import { StoriesServiceService } from '../Model/stories-service.service';

@Component({
  selector: 'app-insert-allrecords-cahes',
  templateUrl: './insert-allrecords-cahes.component.html',
  styleUrl: './insert-allrecords-cahes.component.css'
})
export class InsertALLRecordsCahesComponent {
  flag:any;
  insertedCommet:any;
  loading = true;
  constructor(private service: StoriesServiceService) {
       
  }
  InsertALLRecords():any
  {
  this.service.InsertALLRecords().subscribe(
    data=>{this.flag=data   
      console.log(this.flag.stories);   
    } );

    if(this.flag)
    {
        this.loading = false;
        this.insertedCommet="inserted successfull";
    }
    else
    {
      this.loading = false;
      this.insertedCommet="inserted not successfull";
    }
  }
}
