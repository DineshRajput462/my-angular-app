import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Demoservice2Service {

  constructor() { }

  getMessage(message: string = "Message from Demoservice2Service"){
    return message;
  }
}
