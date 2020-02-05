import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('.navbar-primary').toggleClass('collapsed');

      $('.navbar-primary').hover(function(e) {
        $('.navbar-primary').toggleClass('collapsed');
        $(".body-contenue").css("width", "85%");
        $(".body-contenue").css("transition", "ease-in 0.2s");
        
    },function(){
      $(".body-contenue").css("width", "95%");
      $(".body-contenue").css("transition", "ease-in 0.2s");
      $('.navbar-primary').toggleClass('collapsed');

    });


  });
  }

}
