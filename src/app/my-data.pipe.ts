import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dataEmisji'
})
export class MyDataPipe implements PipeTransform {

  transform(value: any, format?: any): any {
    const result = moment(value).parseZone();
    if (format){
      return result.format(format);
    }
    return result.format('YYYY-MM-DD HH:mm:ss');
  }

}
