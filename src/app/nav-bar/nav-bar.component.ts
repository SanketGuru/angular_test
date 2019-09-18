import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    this.initNavBar();
  
    this.togel();
    

  //_____
  
   
  //______
    }


initNavBar(){
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
    
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
    
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
    
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
    
          });
        });
      }
}
    toggelMoreDrpoDown(event : Event) {
   this.togel();
     
     }//open1

     togel(){   let eleD= (document.querySelector('.navbar-dropdown') as HTMLElement);
     // console.log(eleD);
     // eleD.classList.toggle('is-active');
    if(eleD.hidden){
     eleD.hidden= false;
    }else
    eleD.hidden= true;}

}
