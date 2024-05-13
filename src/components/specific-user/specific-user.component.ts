import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { getUserByID } from '../../store/users/users.actions';
import { getUserByIDSelector } from '../../store/users/users.selectors';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-specific-user',
  standalone: true,
  imports: [CommonModule,RouterModule,MatProgressBarModule],
  templateUrl: `./specific-user.component.html`,
  styleUrl: './specific-user.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpecificUserComponent implements OnDestroy {

  userId:string | null= '0';
  specificUser={};

  constructor(private route:ActivatedRoute,private store:Store,private cd:ChangeDetectorRef){}

  ngOnInit(){
    this.route.paramMap.subscribe(params=>{
      this.userId=params?.get('id');
      this.getUserByID();
    })
  }
  
  getUserByID(){
    this.store.dispatch(getUserByID({id:this.userId}));
    this.store.select(getUserByIDSelector).subscribe(res=>{
      this.specificUser=res;
      this.cd.detectChanges();
    })
  }

  ngOnDestroy():void{
    this.specificUser={};
  }
}

