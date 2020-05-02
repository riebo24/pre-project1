import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})

export class ProductAlertsComponent implements OnInit {
  // productという名前のプロパティを定義。親コンポーネント（product-list）から渡される。
  //親コンポーネントで定義されたpruductを、子コンポーネントでも使用可能。
  @Input() product; 

  //このコンポーネント（子コンポーネント）が作成したプロパティを親コンポーネントに渡す
  @Output() notify = new EventEmitter;


  ngOnInit() {
  }

}
