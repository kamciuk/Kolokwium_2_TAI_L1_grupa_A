import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MlDataService} from '../km-data.service';


@Component({
  selector: 'app-orders-km',
  templateUrl: './orders-km.component.html',
  styleUrls: ['./orders-km.component.css']
})
export class OrdersLMComponent implements OnInit {

  public items$: any;
  constructor(private service: MlDataService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });


  }
}
