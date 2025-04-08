import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'

@Component({
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent {
  public empId: number = 0;
  public empName: string = "";

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // let id = this.activatedRoute.snapshot.paramMap.get('id');
    // let name = this.activatedRoute.snapshot.paramMap.get('name');
    // this.empId = Number(id);
    // this.empName = String(name);

    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      let name = params.get('name');
      this.empId = Number(id);
      this.empName = String(name);
    });
  }

  goToBack() {
    this.router.navigate(['/employees', { id: this.empId }]);
  }

  previousEmp() {
    let previousId = this.empId - 1;
    this.router.navigate(['/employees', previousId]);
  }

  nextEmp() {
    let nextId = this.empId + 1;
    this.router.navigate(['/employees', nextId]);
  }
}
