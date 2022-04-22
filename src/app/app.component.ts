import { Component, OnInit} from '@angular/core';
import { IgIPD } from './models/IgIpdSnap.model';
import { SnapIpdComponent } from './snap-ipd/snap-ipd.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dakar !: IgIPD;
  newyork !:IgIPD;
  bogota !:IgIPD;
  ngOnInit()
  {
    this.dakar = new IgIPD("Dakar","la plus belle ville de l'Afrique", new Date,25,
    "https://th.bing.com/th/id/OIP.JKEEMeDS05R-loL57zoI9QHaE9?w=304&h=203&c=7&r=0&o=5&pid=1.7","Colombie");

    this.newyork = new IgIPD("New York", "la ville qui ne dort jamais",new Date, 50,
    "https://th.bing.com/th/id/R.d1576384b6ce88886ba9d48e906d988c?rik=%2fzcFSeXC4QF2bQ&pid=ImgRaw&r=0");

    this.bogota = new IgIPD("Bogota","Bogota se trouve au centre de la Colombie, dans une zone naturelle appelée savane de Bogota",new Date,30,
    "https://www.ou-et-quand.net/partir/images/illustration/bogot-.jpg","Colombie")
  }
  
}
