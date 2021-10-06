import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonStringifier'
})
export class JsonStringifierPipe implements PipeTransform {

    transform(value: Object): string {
        if(value) {
            return JSON.stringify(value, undefined, 6);
        }
        return '';
    }

}
