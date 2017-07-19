import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

@Injectable()
export class UsersService {
  
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type': 'application/json'});
  //private heroesUrl = 'api/heroes';  // URL to web api

  getUsers(): Promise<User[]> {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
               .toPromise()
               .then(response => response.json().data as User[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
