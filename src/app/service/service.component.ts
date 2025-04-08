import { Component } from '@angular/core';
import { DemoseviceService } from '../demosevice.service';
import { Demoservice2Service } from '../demoservice2.service';

@Component({
  selector: 'app-service',
  imports: [],
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  // providers: [DemoseviceService, Demoservice2Service]
})

export class ServiceComponent {
  message: string;

  constructor(private demoService: DemoseviceService) {
    this.message = demoService.getMessage();
  }

  getMessage(message: string) {
    this.message = this.demoService.getMessage(message);
  }

  getMessage2(message: string) {
    this.message = this.demoService.getMessage2(message);
  }
}
