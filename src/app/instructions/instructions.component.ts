import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  signin(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(data => {
      console.log(data.additionalUserInfo.isNewUser);
      console.log(data);
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
