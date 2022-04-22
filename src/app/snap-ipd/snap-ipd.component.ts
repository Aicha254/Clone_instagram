import { Component, Input, OnInit } from '@angular/core';
import { IgIPD } from '../models/IgIpdSnap.model';

@Component({
  selector: 'app-snap-ipd',
  templateUrl: './snap-ipd.component.html',
  styleUrls: ['./snap-ipd.component.scss']
})
export class SnapIpdComponent implements OnInit {
  @Input() ville !: IgIPD;
  boutonText !:string
  image !:string;
  constructor() { }

  ngOnInit(): void {
    //  this.boutonText = "like";
     this.image = "black1.png"
  }
  // onAddLike(){
  //   if(this.boutonText === "like"){
  //     this.ville.snap++;
  //     this.boutonText = "Dislike";
  //     
  //   }
  //   else{
  //     this.ville.snap--;
  //     this.boutonText = "like";
  //    

  //   }
    

  // }

  onAddLike(){
    if(this.image === "black1.png"){
      this.ville.snap++;
      this.image = "red.png";
    }
    else{
      this.ville.snap--;
      this.image = "black1.png";

    }
    

  }
}
