import { Injectable } from '@angular/core';
import { Demoservice2Service } from './demoservice2.service';

@Injectable({
  providedIn: 'root'
})

export class DemoseviceService {

  constructor(private demoService2: Demoservice2Service) { }

  getMessage(message: string = "Message from DemoserviceService") {
    return message;
  }

  getMessage2(message: string) {
    return this.demoService2.getMessage(message);
  }
}
