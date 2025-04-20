import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  imports: [RouterLink],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css'
})
export class EmployeesListComponent {
  employees = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
    { id: 5, name: "E" }
  ];

  selectedId: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.selectedId = Number(id);
    });
  }

  viewEmployeeDetails(employee: { id: number; name: string; }) {
    this.router.navigate(['/employees', employee.id, employee.name]);
  }
}
