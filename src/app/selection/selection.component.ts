import { Component,Input, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})


export class SelectionComponent implements OnInit {

  constructor(private service:ApiService) { }
  
  @Input() moc: number=0;
  @Input() strefaKlimatyczna: number =0;
  @Input() zrudloCiepla: number=0;
  backendResponse: any;

  ngOnInit(): void {
  }

  public sendRequestToBackend()  
  {
    var dane ={
      moc:this.moc,
      strefaKlimatyczna:this.strefaKlimatyczna,
      zrudloCiepla:this.zrudloCiepla}
      this.service.getResoultComponent(dane).subscribe(res =>{
      this.backendResponse= res
    }) 
  }
}
