/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ReversePipe } from './reverse.pipe';

describe('Pipe: Reverse', () => {
  it('create an instance', () => {
    let pipe = new ReversePipe();
    expect(pipe).toBeTruthy();
  });

   it('transform should return correct value', () => {
    let pipe = new ReversePipe();
    expect(pipe.transform('hello')).toBe('olleh');
  });
});


