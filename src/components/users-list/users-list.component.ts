import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getUsers } from '../../store/users/users.actions';
import { getUsersSelector } from '../../store/users/users.selectors';
import { User } from '../../store/users/users.model';
import { Router, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatProgressBarModule,
    RouterModule
  ],
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {

  page: number = 1;
  count: number = 0;
  itemsPerPage: number = 6;
  totalItems:any;
  users:User[]=[]
  originalUsers: User[] = [];
  constructor(private store: Store,private route:Router,private cdr: ChangeDetectorRef){}

  ngOnInit(){
    this.getUsers(1);
  }

  getUsers(pageNumber:number){
    this.store.select(getUsersSelector).subscribe((res:any)=>{
      if(res.data){
        this.users=res?.data;
        this.originalUsers = [...this.users]; 
        this.totalItems=res.total;
        this.cdr.detectChanges();
      }
      else{
        this.store.dispatch(getUsers({pageNumber:pageNumber}));
      }
    })
  }

  selectUser(userId:string){
    this.route.navigateByUrl(`/${userId}`);
  }

  filterUsers(event:any){
    if(event.target.value.length===0){
      this.users = [...this.originalUsers];
    }
    else {
      this.users=this.originalUsers.filter((user:any)=>user?.id ==event.target.value);
    }
  }

  onPageChange(event: any) {
    this.page = event;
    this.store.dispatch(getUsers({pageNumber:this.page}));
  }
}


