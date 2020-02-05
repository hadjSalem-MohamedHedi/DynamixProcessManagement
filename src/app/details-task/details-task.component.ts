import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-details-task',
  templateUrl: './details-task.component.html',
  styleUrls: ['./details-task.component.scss']
})
export class DetailsTaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(".btn-decliner").click(function(){
        $(".etablir").slideDown();
        $("#annuler").show();
        $("#btn-decliner").hide();
      });

      $("#annuler").click(function(){
        $(".etablir").slideUp();
        $("#annuler").hide();
        $("#btn-decliner").show();
      });






      $("#btn-accept").click(function(){
        $(".dynamix").slideDown();
        $("#annuleraccept").show();
        $("#btn-accept").hide();
      });

      $("#annuleraccept").click(function(){
        $(".dynamix").slideUp();
        $("#annuleraccept").hide();
        $("#btn-accept").show();
      });

    });
 }


}
