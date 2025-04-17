import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [RouterLink],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  name: string | null = "";
  name2: string = "";
  name3: string = "";

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');

    this.route.queryParams.subscribe(params => {
      this.name2 = params['name'];
    });

    this.route.data.subscribe(data => {
      this.name3 = data['name'];
    });
  }

  goToProfile(name: string) {
    this.router.navigate(['profile'], { queryParams: { name } });
  }
}
