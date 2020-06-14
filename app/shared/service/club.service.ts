import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Club } from '../models/club';

@Injectable()
export class ActionService {
  private API_URL: string = 'https://amberts/api/club'
  private clubs:Array<Club>=[];

  constructor(private http: HttpClient) {
    this.generateTestClubs();
  }

  getClubsLocal():Array<Club> {
    return this.clubs;
  }

  private toClub(obj:any):Club {
    let club = new Club();
    club.id = obj.id;
    club.name = obj.name;
    club.short_description = obj.short_description||'';
    club.description = obj.description||'';
    club.avatar = club.avatar;
    club.town = club.town;
    club.country = club.country;
    return club;
  }

  private handleError(err) {
    let errorMessage: string;
    if (err instanceof HttpResponse) {
      let body:any = err || '';
      let error = body.error || JSON.stringify(body);
      errorMessage = `${err.status} - ${err.statusText} || ''} ${err}`;
    } else errorMessage = err.message ? err.message : err.toString();
    return Observable.throw(errorMessage)
  }

  private generateTestClubs():void {  
    this.http.get('https://raw.githubusercontent.com/spineag/amberts/master/assets/server_temp/actions.json')
      .map(res => res.data)
      .catch(this.handleError)
      .subscribe(data => {
        for (let i:number=0;i<data.length;i++){
          this.clubs.push(this.toClub(data[i]));
        }
        console.log(this.clubs);
    });
  }
}