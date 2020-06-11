import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '../models/action';

@Injectable()
export class ActionService {
  private APIurl: string = 'https://amberts/api/action'

  constructor(private http: HttpClient) {}

  /**
   * Get all actions
   */
  getActions(): Observable<Action[]> {
    return this.http.get(this.APIurl)
      .map(res => res.data)
      .map(actions => actions.map(this.toAction))
      .catch(this.handleError);
  }

  /**
   * Get a single user
   */
  getAction(id: number): Observable<Action> {
    return this.http.get(`${this.APIurl}/${id}`)
      .map(res => res.data)
      .map(this.toAction)
      .catch(this.handleError)
  }

  // create a user
  createAction(act: Action): Observable<Action> {
    return this.http.post(this.APIurl, act)
      .map(res => res.data)
      .catch(this.handleError)
  }

  // update a user
  updateAction(act: Action): Observable<Action> {
    return this.http.put(`${this.APIurl}/${act.id}`, act)
      .map(res => res.data)
      .catch(this.handleError)
  }

  // delete a user
  deleteAction(id: number): Observable<any> {
    return this.http.delete(`${this.APIurl}/${id}`)
      .catch(this.handleError);
  }

  /**
   * Convert action from API to Action class
   */
  private toAction(obj): Action {
    let action = new Action();
    action.id = obj.id,
    action.name = obj.name,
    action.short_description = obj.short_description||'',
    action.description = obj.description||'',
    action.type = obj.type||7,
    action.dateStart = new Date(obj.dateStart),
    action.dateEnd = new Date(obj.dateEnd),
    action.route = obj.route||'';
    action.speedRange =  obj.speedRange||'';
    action.hard = obj.hard||'';
    action.routeLength = obj.routeLength||'';
    action.ownerUserId = obj.ownerUserId;
    action.ownerClubId = obj.ownerClubId||'';
    return action;
  }


  /**
   * Handle any errors from the API
   */
  private handleError(err) {
    let errorMessage: string;

    if (err instanceof HttpResponse) {
      let body:any = err || '';
      let error = body.error || JSON.stringify(body);

      errorMessage = `${err.status} - ${err.statusText} || ''} ${err}`;
    } else {
      errorMessage = err.message ? err.message : err.toString();
    }

    return Observable.throw(errorMessage)
  }
}