import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Tutor } from '../models/tutor';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  tutorCollection: AngularFirestoreCollection<Tutor>;
  tutors: Observable<Tutor[]>;

  constructor(private afs: AngularFirestore) {

    this.tutorCollection = this.afs.collection('tutors', ref => ref.orderBy('title','asc'));

  }

  addTutor(tutor: Tutor){
    return this.tutorCollection.add(tutor)
    .then(data => {
      return data;
    });
  }
}
