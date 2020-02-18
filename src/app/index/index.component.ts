import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase , AngularFireList} from 'angularfire2/database';
import 'firebase/database';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  itemList: AngularFireList<any>;
  itemArray = [] ;
  myemail: string;
  constructor(public db: AngularFireDatabase ) {
    this.itemList = db.list('Comptes');
  }

  ngOnInit() {
    this.myemail = localStorage.getItem('myemail');

    this.itemList.snapshotChanges().subscribe(actions=>{
     actions.forEach(action=>{
      let y =action.payload.toJSON()
      this.itemArray.push(y as ListItemClass)

    })
   })




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

export class ListItemClass{
  email: string;
  role: string;
  nom: string;
  prenom: string;
}
