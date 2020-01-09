import { Component, OnInit } from '@angular/core';
import { DetailType } from '../../../detail-type.enum';
import { ChangeTypeService } from '../../change-type.service';

@Component({
  selector: 'app-coming-tv-trad-book',
  templateUrl: './coming-tv-trad-book.component.html',
  styleUrls: ['./coming-tv-trad-book.component.sass']
})
export class ComingTvTradBookComponent implements OnInit {

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
