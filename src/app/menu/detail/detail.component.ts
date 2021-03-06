import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../data.service";
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id:any;
  data:any;
  constructor(private route:ActivatedRoute = new ActivatedRoute, private Obj:DataService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.Obj.getById(this.id).subscribe( (tmp:any) =>{
      this.data = tmp[0];
      console.log(this.data);
    })
  }

}
