import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productIntroduction } from '../../../../product-introduction.const'

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html'
  // styleUrls: []
})
export class IntroductionComponent implements OnInit {

  productData = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(queryParams => {
      this.productData = productIntroduction[queryParams['order']]
    })
  }

}
