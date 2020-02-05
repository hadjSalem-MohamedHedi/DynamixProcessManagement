import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-detaitsprojects',
  templateUrl: './detaitsprojects.component.html',
  styleUrls: ['./detaitsprojects.component.scss']
})
export class DetaitsprojectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $("#Dashboard").click(function(){
        $("#dashboard").fadeIn("slow");
        $("#plan").hide();
        $("#today").hide();
        $("#journal").hide();
      });

      $("#Plan").click(function(){
        $("#dashboard").hide();
        $("#plan").fadeIn("slow");
        $("#today").hide();
        $("#journal").hide();
      });


      $("#Today").click(function(){
        $("#dashboard").hide();
        $("#plan").hide();
        $("#today").fadeIn("slow");
        $("#journal").hide();

      });

      $("#Journal").click(function(){
        $("#dashboard").hide();
        $("#plan").hide();
        $("#today").hide();
        $("#journal").fadeIn("slow");
      });

      $("#hide01").click(function(){
        $("#desc-besoin").fadeIn("slow");
        $("#hide").fadeIn("slow");
        $("#hide01").hide();
          });
      $("#hide").click(function(){
            $("#desc-besoin").fadeOut();
            $("#hide").hide();
            $("#hide01").fadeIn();
              });

    });
  }


}
