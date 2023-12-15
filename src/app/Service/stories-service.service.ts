
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StoriesServiceService {

  url='http://localhost:5213/api/Stories';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }
  returndata:any;
  getPostBykey(key: string): Observable<any> {
   
    return this.http.get<any>(`${'http://localhost:5213/api/Stories/GetBykey/'+key}`);
      //return this.returndata;
  }
  

  FetchStories(): Observable<any>
  {
  
    return this.http.get<any>(`${'http://localhost:5213/api/Stories/GetAllRecordsStories'}`)    
  }

  InsertALLRecords(): Observable<any>
  {
  
    return this.http.get<any>(`${'http://localhost:5213/api/Stories/InsertAllRecords'}`)    
  }

  FetchALLRecordsTitleAndURL(): Observable<any>
  {
    
    return this.http.get<any>(`${'http://localhost:5213/api/Stories/FetchAllRecordsTitleAndURL'}`)    
  }

  


}
