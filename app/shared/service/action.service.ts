import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '../models/action';

@Injectable()
export class ActionService {
  private API_URL: string = 'https://amberts/api/action'
  private actions:Array<Action>=[];

  constructor(private http: HttpClient) {
    this.generateTestActions();
  }

  // getActions(): Observable<Action[]> {   // need partial loading
  //   return this.http.get(this.API_URL)
  //     .map(res => res.data)
  //     .map(actions => actions.map(this.toAction))
  //     .catch(this.handleError);
  // }
  getActionsLocal():Array<Action> {
    return this.actions;
  }

  addActionLocal(act:Action):void {    // use for test without server
    this.actions.push(act);
    this.sortActions();
  }

  deleteActionLocal(id:number){
    for (let i:number=0;i<this.actions.length;i++){
      if (this.actions[i].id==id){
        this.actions.splice(i,1);
        break;
      }
    }
  }

  sortActions():void {
    this.actions.sort((a:Action, b:Action)=>{
      if (a.dateStartTotal < b.dateStartTotal) return -1;
      if (a.dateEndTotal > b.dateStartTotal) return 1;
      return 0;
    });
  }

  // getAction(id: number): Observable<Action> {
  //   return this.http.get(`${this.API_URL}/${id}`)
  //     .map(res => res.data)
  //     .map(this.toAction)     // alsp add it to local
  //     .catch(this.handleError)
  // }

  // createAction(act: Action): Observable<Action> {
  //   return this.http.post(this.API_URL, act)
  //     .map(res => res.data)
  //     .catch(this.handleError)
  // }

  // updateAction(act: Action): Observable<Action> {
  //   return this.http.put(`${this.API_URL}/${act.id}`, act)
  //     .map(res => res.data)
  //     .catch(this.handleError)
  // }

  // deleteAction(id: number): Observable<any> {
  //   return this.http.delete(`${this.API_URL}/${id}`)
  //     .catch(this.handleError);
  // }

  private toAction(obj:any): Action {
    let action = new Action();
    action.id = obj.id;
    action.name = obj.name;
    action.short_description = obj.short_description||'';
    action.description = obj.description||'';
    action.type = obj.type||7;
    action.route = obj.route||'';
    action.speedRange =  obj.speedRange||'';
    action.hard = obj.hard||'';
    action.routeLength = obj.routeLength||'';
    action.ownerUserId = obj.ownerUserId;
    action.ownerClubId = obj.ownerClubId||'';

    if (!action.dateStartTotal){  // for test
      let dt = new Date(Date.now() - 30*1000*60*60*24 + Math.floor(Math.random()*60*24*1000*60*60));
      dt.setSeconds(0);
      dt.setMinutes(0);
      dt.setMilliseconds(0);
      action.dateStartTotal = dt; 
      action.dateEndTotal = new Date(action.dateStartTotal.getTime() + Math.floor(Math.random()*48)*2*1000*60*60);
      action.dateEndTotal.setMinutes(0);
    } else{
      action.dateStartTotal = new Date(obj.dateStart);
      action.dateEndTotal = new Date(obj.dateEnd);
    }
    action.fillDates();
    return action;
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

  private generateTestActions():void {  
    this.http.get('https://raw.githubusercontent.com/spineag/amberts/master/assets/server_temp/actions.json')
      .map(res => res.data)
      .catch(this.handleError)
      .subscribe(data => {
        for (let i:number=0;i<data.length;i++){
          this.actions.push(this.toAction(data[i]));
        }
        this.sortActions();
        //console.log(this.actions);
    });
  }
}