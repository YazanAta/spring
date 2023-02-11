import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IncreamentService {
  increament(x:number): number{
    return x+=1;
  }
  constructor() { }
}
