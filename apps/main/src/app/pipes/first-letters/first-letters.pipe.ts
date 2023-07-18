import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetters',
  standalone: true,
})
export class FirstLettersPipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').map(s => s[0]).join();
  }
}
