import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRecodsPipe'
})
export class SearchRecodsPipePipe implements PipeTransform {

  transform(list: any[], value: string) {
  
    //list.filter(item => item.id === value)
    if(value!=null && value!='')
    {
      if(list.filter(item => item.id==value).length!=0)
      {
        return list.filter(item => item.id==value);  
      }
      else if(list.filter(item => item.title==value).length!=0)
      {
        return list.filter(item => item.title==value);  
      }
      else if(list.filter(item => item.url==value).length!=0)
      {
        return list.filter(item => item.url==value);
      }
      
    }

    return list;
    //return value ? list.filter(item => item.id==value): list;  

  }
}
