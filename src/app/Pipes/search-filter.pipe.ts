import { Injectable,Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class searchFilter implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value)return null;
    if(!args)return value;

    args = args.toLowerCase();

    return value.filter(function(data){
        return JSON.stringify(data).toLowerCase().includes(args);
    });
}

}
