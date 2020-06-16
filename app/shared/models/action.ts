export class Action {
  id: number;
  name: string;
  short_description: string;
  description: string;
  type: number;
  dateStartTotal: Date; 
  dateEndTotal: Date;  
  dayStart: string;  
  dayEnd: string;     
  timeStart: string;   
  timeEnd: string;   
  route: string;
  speedRange: string; 
  speedUnit: string;
  hard: number; // 1-5 
  routeLength: string; 
  routeUnit: string;
  ownerUserId: number;
  ownerClubId: number;
  isPrivate: boolean;

  fillDates():void{
    this.dayStart = ''+this.norm(this.dateStartTotal.getDate())+
                    '.'+this.norm(this.dateStartTotal.getMonth()+1);
    this.timeStart = ''+this.norm(this.dateStartTotal.getHours())+
                    ':'+this.norm(this.dateStartTotal.getMinutes(),true);
    this.dayEnd = ''+this.norm(this.dateEndTotal.getDate())+
                  '.'+this.norm(this.dateEndTotal.getMonth()+1);
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
    if (st.length==2) return st;
    return b ? st+'0' : '0'+st;
  }
}