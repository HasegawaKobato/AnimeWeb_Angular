import { Component, OnInit } from '@angular/core';
import { DetailType } from '../../../detail-type.enum';
import { ChangeTypeService } from '../../change-type.service';
import { newProduct } from './new-product.const';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: []
})
export class NewComponent implements OnInit {

  detailType = DetailType;
  productData = newProduct;
  
  constructor(private changeTypeService: ChangeTypeService) { }

  ngOnInit() {
  }

  getDetailType(): DetailType {
    return this.changeTypeService.getDetailType();
  }

  changeToDetailType(detailType: DetailType): void {
    this.changeTypeService.changeToDetailType(detailType);
  }

}
