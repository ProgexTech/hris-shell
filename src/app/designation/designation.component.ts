import { Component, OnInit } from '@angular/core';
import { Designation } from '../entities/designation';
import { DesignationService } from '../designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  allDesignations: Designation[];
  errorMessage: string;
  model: any = {};

  constructor(private designationService: DesignationService) { }

  ngOnInit() {
    this.designationService.getAllDesignations()
      .subscribe(designations => this.allDesignations = designations, err => this.errorMessage = <any>err);
  }

  addDesignation() {
    this.designationService.addDesignation(this.model)
      .subscribe(data => {
        this.designationService.getAllDesignations()
          .subscribe(designations => this.allDesignations = designations, err => this.errorMessage = <any>err);
      },err => this.errorMessage = <any>err);

    this.model = {};
  }

}
