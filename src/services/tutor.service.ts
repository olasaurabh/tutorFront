import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Tutor } from '../models/tutor';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  tutorCollection: AngularFirestoreCollection<Tutor>;
  tutors: Observable<Tutor[]>;

  constructor(private afs: AngularFirestore) {

    this.tutorCollection = this.afs.collection('tutors');

    this.tutors = this.tutorCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
        
      }))
      
    );


  }

  getTutor(){
    return this.tutorCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Tutor;
        data.id = a.payload.doc.id;
        return data;
      })
    }));
     
  }

  addTutor(tutor: Tutor){
    return this.tutorCollection.add(tutor)
    .then(data => {
      return data.id;
    });
  }
}
