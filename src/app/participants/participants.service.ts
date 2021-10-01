import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParticipantsService {
  getParticipants(){
      return [
          {name: "Julies Bake Shop", age:23 + " years old", gender: "Female"},
          {name: "Arbees Barato", age:45 + " years old", gender: "Male"},
          {name: "Alturas Mall", age:50 + " years old", gender: "Male"},
          {name: "Goldi Locks", age:27 + " years old", gender: "Male"},
          {name: "Ki Yods", age:21 + " years old", gender: "Female"},
      ];
  }
}
