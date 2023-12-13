import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRecodsPipe'
})
export class SearchRecodsPipePipe implements PipeTransform {
  transform(list: any[], value: string) {
   
   list= list.filter(x=>x.url!=null);
    if(value!=null && value!='')
    {
      debugger
      if(value === undefined || value === null) return list;
      
      if(list.filter(function(element) {
                return element.title.toLowerCase().includes(value.toLocaleLowerCase());
      }).length>0)
      {
        return list.filter(function(element) {
          return element.title.toLowerCase().includes(value.toLocaleLowerCase());
          })
      }
      else if(list.filter(function(element) {
        return element.url.toLowerCase().includes(value.toLocaleLowerCase());
        }).length>0)
            {
                return list.filter(function(element) {
                  return element.url.toLowerCase().includes(value.toLocaleLowerCase());
              })
    }
    else if(list.filter(x=>x.id==value).length>0)
          {
              return list.filter(x=>x.id==value);
          }

    }

    return list;
   
  }
}
