import { Injectable } from '@angular/core';
import { Type } from '../type.enum';
import { DetailType } from '../detail-type.enum';

@Injectable({
  providedIn: 'root'
})
export class ChangeTypeService {

  type = Type.Base;
  detailType = DetailType.None;

  constructor() { }
  
  getType(): Type {
    return this.type;
  }

  changeToType(type: Type): void {
    if (this.type !== type) {
      this.type = type;
    } else {
      this.type = Type.Base;
    }
  }

  getDetailType(): DetailType {
    return this.detailType;
  }

  changeToDetailType(detailType: DetailType): void {
    if (this.detailType !== detailType) {
      this.detailType = detailType;
    } else {
      this.detailType = DetailType.None;
    }
  }

}
