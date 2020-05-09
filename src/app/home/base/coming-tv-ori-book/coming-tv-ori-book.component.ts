import { Component, OnInit } from '@angular/core';
import { DetailType } from '../../../detail-type.enum';
import { ChangeTypeService } from '../../change-type.service';

@Component({
  selector: 'app-coming-tv-ori-book',
  templateUrl: './coming-tv-ori-book.component.html',
  styleUrls: []
})
export class ComingTvOriBookComponent implements OnInit {

  detailType = DetailType;
  
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
