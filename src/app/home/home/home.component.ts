import { Component, OnInit } from '@angular/core';
import { Type } from '../../type.enum';
import { DetailType } from '../../detail-type.enum';
import { ChangeTypeService } from '../change-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
  // styleUrls: []
})
export class HomeComponent implements OnInit {

  allType = Type;
  allDetailType = DetailType;

  constructor(
    private changeTypeService: ChangeTypeService,
    private router: Router) { }

  ngOnInit() {
    this.changeToDetailType(this.allDetailType.None);
    this.changeToType(this.allType.Base)
  }

  getType(): Type {
    return this.changeTypeService.getType();
  }

  changeToType(type: Type): void {
    this.changeTypeService.changeToType(type);
  }

  getDetailType(): DetailType {
    return this.changeTypeService.getDetailType();
  }

  changeToDetailType(detailType: DetailType): void {
    this.changeTypeService.changeToDetailType(detailType);
  }

}
