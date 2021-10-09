import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonStringifier'
})
export class JsonStringifierPipe implements PipeTransform {

    transform(value: Object): string {
        if(typeof value == 'string') {
            return value;
        }
        if(value) {
            return JSON.stringify(value, undefined, 6);
        }
        return '';
    }

}
