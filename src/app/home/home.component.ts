import { Component } from "@angular/core";
import { Catalogs } from "../services/service.catalogs"
import { Router } from "@angular/router"
import { delay } from 'rxjs/operators';


@Component({
  selector: 'home-app',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css' , '../styles/general.css'],
  providers: [Catalogs]
})

export class HomeComponent{

  public actionCard: any[] = []
  public comedyCard :any[] = []
  public showCard : number = 0;
  public spinner = {
    off:true
  }

  constructor(public catalog: Catalogs, public router: Router){

    this.actions();
    this.scrollTo();
    setTimeout(()=>{this.showCard = 1}, 2000);


  }
  actions(){
    this.catalog.getCatalogs("romance").pipe(delay(2000)).subscribe((data:any)=>{
        this.actionCard = data;
    }, (err)=>{console.log(err)}, ()=>{
      this.spinner.off=false
    })
  }



  scrollTo(){
      let counterInterval: number = 500;
       setTimeout(()=>{

          window.scrollBy(0, counterInterval)

      },100);
  }

  redirectToNavigate(){
    setTimeout(() => {
      this.router.navigate(["navigate"])
    }, 500);

  }

  showCardOnly(id:number=0){
    if (id != 0){
      setTimeout(()=>{this.router.navigate(["home", id])}, 100);
    }


  }




}
