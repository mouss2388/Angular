import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-department-list',
  template: `
            <h3>Department List</h3>
            <ul class="items">
              <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
                <span class="badge badge-secondary">{{department.id}}</span> {{department.name}}
              </li>
            </ul>
              `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {id: 1, name: 'Angular'},
    {id: 2, name: 'Node'},
    {id: 3, name: 'MongoDB'},
    {id: 4, name: 'Ruby'},
    {id: 5, name: 'Bootstrap'}
  ];
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params.id);
      this.selectedId = id;
     });

  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id]);

  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}
