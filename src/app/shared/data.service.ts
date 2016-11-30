import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  getDetails(){
    const resultPromise = new Promise((resolve, reject) =>{
      setTimeout(()=>{
        resolve('Data');
      }, 3000);
    });
    return resultPromise;
  }

}
