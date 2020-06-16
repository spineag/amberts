export class Action {
  id: number;
  name: string;
  short_description: string;
  description: string;
  type: number;
  dateStartTotal: Date; // date + time
  dateEndTotal: Date;   // date + time
  dayStart: string;     // without time
  dayEnd: string;       // without time
  timeStart: string;    // only time
  timeEnd: string;      // only time
  route: string;
  speedRange: string; // 5:30 - 6:00 hv/km OR 20-25 km/hour
  speedUnit: string;
  hard: number; // 1-5 - no any need, it can be automatic later
  routeLength: string; // 10 km OR 50 - 55 km
  routeUnit: string;
  ownerUserId: number;
  ownerClubId: number;

  fillDates():void{
    this.dayStart = ''+this.norm(this.dateStartTotal.getDate())+
                    '.'+this.norm(this.dateStartTotal.getMonth()+1)+
                    '.'+this.dateStartTotal.getFullYear();
    this.timeStart = ''+this.norm(this.dateStartTotal.getHours())+
                    ':'+this.norm(this.dateStartTotal.getMinutes(),true);
    this.dayEnd = ''+this.norm(this.dateEndTotal.getDate())+
                  '.'+this.norm(this.dateEndTotal.getMonth()+1)+
                  '.'+this.dateEndTotal.getFullYear();
    this.timeEnd = ''+this.norm(this.dateEndTotal.getHours())+
                  ':'+this.norm(this.dateEndTotal.getMinutes(),true);
  }

  fillUnits():void{
    switch (this.type){
      case 1: this.routeUnit="км"; this.speedUnit="км/год"; break;
      case 2: this.routeUnit="км"; this.speedUnit="хв/км"; break;
      case 3: this.routeUnit="м";  this.speedUnit="хв/100м"; break;
      default: ;   
    }
  }

  norm(st:string|number,b?:boolean):string{
    st=''+st;
    if (st.length==1) return st;
    return b ? st+'0' : '0'+st;
  }
}